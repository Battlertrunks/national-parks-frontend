import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ParkDetailsCardModel from "../models/ParkDetailsCardModel";
import { getParkDetails } from "../services/NSPServices";
import "./ParkDetailsCard.css";
import { useSearchParams } from "react-router-dom";
import { getWeather } from "../services/WeatherServices";
import WeatherModel from "../models/WeatherModel";
import AuthContext from "../context/AuthContext";
import AttendedParksContext from "../context/AttendedParksContext";
import Activities from "../models/Activities";
import CompletedParks from "../models/CompletedParks";
import AccountActivitiesCard from "./AccountActivitiesCard";
import CommentForm from "./CommentForm";
import CommentContext from "../context/CommentContext";

const ParkDetailsCard = () => {
  const [parkDetails, setParkDetails] = useState<ParkDetailsCardModel>();
  const [searchParams] = useSearchParams();
  const parkCode: string | null = searchParams.get("parkCode");
  const [currentWeather, setCurrentWeather] = useState<WeatherModel>();

  const { user } = useContext(AuthContext);
  const { addPark, attendedParks } = useContext(AttendedParksContext);
  const { comments, getAndSetComments } = useContext(CommentContext);

  // const parkCode: string | undefined = useParams().parkCode;

  useEffect(() => {
    getParkDetails(parkCode!).then((response) => {
      setParkDetails(response.data[0]);
    });
    getAndSetComments(parkDetails?.parkCode!);
  }, [parkCode]);

  useEffect(() => {
    if (parkDetails?.addresses[0].postalCode) {
      getWeather(parkDetails?.addresses[0].postalCode).then((response) =>
        setCurrentWeather(response)
      );
    }
  }, [parkDetails]);
  console.log(currentWeather);

  const addingParkToProgress = (): void => {
    if (user) {
      const result: Activities[] = parkDetails!.activities.map((act) => {
        return { id: act.id, name: act.name, completed: false };
      });

      const parkToAdd: CompletedParks = {
        id: parkDetails!.id,
        uid: parkDetails!.uid,
        images: parkDetails!.images,
        fullName: parkDetails!.fullName,
        description: parkDetails!.description,
        parkCode: parkDetails!.parkCode,
        activities: result,
      };
      console.log(parkToAdd, user.uid, "Hello");
      addPark({ ...parkToAdd, uid: user.uid });
    }
  };

  return (
    <div className="ParkDetailsCard">
      <h1>{parkDetails?.fullName}</h1>
      <p>{Math.floor(currentWeather?.current.temp_f!)} &#8457;</p>
      <img src={currentWeather?.current.condition.icon} alt="Weather Icon" />
      <img src={parkDetails?.images[0].url} alt="park images" />

      <p>{parkDetails?.description}</p>
      {user && !attendedParks.some((park) => park?.id === parkDetails?.id) && (
        <button onClick={() => addingParkToProgress()}>Attended</button>
      )}
      <h2>Activities</h2>
      <ul>
        {parkDetails?.activities.map((activity) => (
          // <AccountActivitiesCard
          //   onDisplayCard={activity}
          //   park={gettingAttendedInfo!}
          // />
          <li key={activity.id}>
            <Link to="/account">
              <p>{activity.name}</p>
            </Link>
          </li>
        ))}
      </ul>
      <h2>Photos</h2>
      <ul>
        {parkDetails?.images.map((image) => (
          <li key={image.altText}>
            <img src={image.url} alt={image.altText} />
          </li>
        ))}
      </ul>

      <h2>Park Address</h2>
      <p>{parkDetails?.addresses[0].line1}</p>
      <p>{parkDetails?.addresses[0].city}</p>
      <p>{parkDetails?.addresses[0].stateCode}</p>
      <p>{parkDetails?.addresses[0].postalCode}</p>

      <h2>Contact Park</h2>
      <p>Phone: {parkDetails?.contacts.phoneNumbers[0].phoneNumber}</p>
      <p>Email: {parkDetails?.contacts.emailAddresses[0].emailAddress}</p>

      {user && <CommentForm parkCode={parkDetails?.parkCode!} />}
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>
            <h4>{comment.username}</h4>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParkDetailsCard;
