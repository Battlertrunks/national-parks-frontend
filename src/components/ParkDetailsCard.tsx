import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
import CommentForm from "./CommentForm";
import CommentContext from "../context/CommentContext";
import HomeSearchParkForm from "./HomePageComponents/HomeSearchParkForm";

const ParkDetailsCard = () => {
  // Stores the parks inforation to be displayed
  const [parkDetails, setParkDetails] = useState<ParkDetailsCardModel>();

  // Getting parkCode to retrieve the correct park by getting it from the
  // search param
  const [searchParams] = useSearchParams();
  const parkCode: string | null = searchParams.get("parkCode");

  // This will store the weather of the park's location
  const [currentWeather, setCurrentWeather] = useState<WeatherModel>();

  // Using context to check if user is logged in and using their uid
  const { user } = useContext(AuthContext);
  // Context to add park to list and check if they are already attended it
  const { addPark, attendedParks } = useContext(AttendedParksContext);
  // Contect to get comments to see
  const { comments, getAndSetComments, deleteCommentOnPark } =
    useContext(CommentContext);

  // Runs when the parkcode has changed
  useEffect(() => {
    // Gets park information to display
    getParkDetails(parkCode!).then((response) => {
      // store the result in parkDetails state
      setParkDetails(response.data[0]);
    });
    // Gets comments from the park
    getAndSetComments(parkCode!);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parkCode]);

  // Gets park weather when parkDetails changes.
  useEffect(() => {
    // gets the result if true and sets weather result in currentWeather state.
    if (parkDetails?.addresses[0].postalCode) {
      getWeather(parkDetails?.addresses[0].postalCode).then((response) =>
        setCurrentWeather(response)
      );
    }
  }, [parkDetails]);

  // When the user clicks attended park, it will appended the park to the list
  const addingParkToProgress = (): void => {
    // Checks if user is logged in
    if (user) {
      // Storing activities the park offers.
      const result: Activities[] = parkDetails!.activities.map((act) => {
        return { id: act.id, name: act.name, completed: false };
      });

      // Adding park to their attended list by storing it in a variable first
      const parkToAdd: CompletedParks = {
        id: parkDetails!.id,
        uid: parkDetails!.uid,
        username: user.displayName!,
        images: parkDetails!.images,
        fullName: parkDetails!.fullName,
        description: parkDetails!.description,
        parkCode: parkDetails!.parkCode,
        activities: result,
      };
      // Sending the parks and assigning it the user using their uid.
      addPark({ ...parkToAdd, uid: user.uid });
    }
  };

  // Displays park information
  return (
    <div className="ParkDetailsCard">
      <HomeSearchParkForm />
      <div className="content-container">
        <div className="parkname-weather-container">
          <h2 className="park-name">{parkDetails?.fullName}</h2>
          <div className="weather-info">
            <p>{Math.floor(currentWeather?.current.temp_f!)} &#8457;</p>
            <img
              src={currentWeather?.current.condition.icon}
              alt="Weather Icon"
            />
          </div>
        </div>
        <img
          src={parkDetails?.images[0].url}
          alt="park images"
          className="main-image"
        />
        <h3>Description</h3>
        <p className="park-description">{parkDetails?.description}</p>
        {user && !attendedParks.some((park) => park?.id === parkDetails?.id) && (
          <button
            className="visited-btn"
            onClick={() => addingParkToProgress()}
          >
            Mark Visited
          </button>
        )}
        <h3>Activities</h3>
        <ul className="activitiesList">
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
        <h3>Photos</h3>
        <ul className="preview-imgs">
          {parkDetails?.images.map((image) => (
            <li key={image.altText}>
              <img src={image.url} alt={image.altText} />
            </li>
          ))}
        </ul>

        <h3>Park Address</h3>
        <p>{parkDetails?.addresses[0].line1}</p>
        <p>{parkDetails?.addresses[0].city}</p>
        <p>{parkDetails?.addresses[0].stateCode}</p>
        <p>{parkDetails?.addresses[0].postalCode}</p>

        <h3>Contact Park</h3>
        <p>Phone: {parkDetails?.contacts.phoneNumbers[0].phoneNumber}</p>
        <p>Email: {parkDetails?.contacts.emailAddresses[0].emailAddress}</p>

        {user && <CommentForm commentLocation={parkDetails?.parkCode!} />}
        <ul className="comments-container">
          {comments.reverse().map((comment) => (
            <li key={comment._id}>
              <div>
                <Link to={`/view/user/${encodeURIComponent(comment.uid)}`}>
                  <h4>{comment.username}</h4>
                </Link>
                <p className="date">{comment.dateAndTime}</p>
              </div>
              <p className="body-text">{comment.text}</p>
              {user && user?.uid === comment.uid && (
                <div className="delete-container">
                  <button
                    className="delete-comment-btn"
                    onClick={() =>
                      deleteCommentOnPark(comment._id!, comment.park_code!)
                    }
                  >
                    Delete Comment
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ParkDetailsCard;
