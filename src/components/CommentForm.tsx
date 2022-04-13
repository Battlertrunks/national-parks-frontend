import { FormEvent, useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import CommentContext from "../context/CommentContext";
import ParkDetailsCardModel from "../models/ParkDetailsCardModel";
import PostModels from "../models/PostModel";
import "./CommentForm.css";

interface Props {
  commentLocation: string;
  postDetails?: PostModels;
}

const CommentForm = ({ commentLocation, postDetails }: Props) => {
  const { user } = useContext(AuthContext);
  const { addCommentToPark, addCommentToPost } = useContext(CommentContext);
  const [commentText, setCommentText] = useState<string>("");

  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();

    const currentDate = new Date();
    const currentYear: number = currentDate.getFullYear();
    const currentMonth: number = currentDate.getMonth();
    const currentDay: number = currentDate.getDate();
    const currentHours: number = currentDate.getHours();
    const currentMinutes: number = currentDate.getMinutes();
    const morningAfternoon: string = currentHours >= 12 ? "pm" : "am";

    const convertedHours: number = currentHours % 12 ? currentHours % 12 : 12;

    const timeFormat: string = `${
      months[currentMonth]
    } ${currentDay}, ${currentYear} ${convertedHours}:${
      currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes
    }${morningAfternoon}`;

    if (commentLocation.length <= 4) {
      console.log("false");
      addCommentToPark({
        text: commentText,
        username: user?.displayName!,
        dateAndTime: timeFormat,
        uid: user?.uid!,
        park_code: commentLocation,
      });
    } else {
      console.log("true");
      postDetails?.comments?.push({
        text: commentText,
        username: user?.displayName!,
        dateAndTime: timeFormat,
        uid: user?.uid!,
        post_id: postDetails?._id,
        innerComments: [],
      });
      addCommentToPost(postDetails?._id!, postDetails!);
    }
    // else {
    //     addCommentToPost({
    //       text: commentText,
    //       username: user?.displayName!,
    //       dateAndTime: timeFormat,
    //       uid: user?.uid!,
    //       : commentLocation,
    //     });
    // }

    setCommentText("");
  };

  return (
    <form className="CommentForm" onSubmit={submitHandler}>
      <label htmlFor="comment">Comment:</label>
      <textarea
        name="Comment"
        id="Comment"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Comment here..."
      />
      <button>Submit</button>
    </form>
  );
};

export default CommentForm;
