import { FormEvent, useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import CommentContext from "../context/CommentContext";
import ParkDetailsCardModel from "../models/ParkDetailsCardModel";
import "./CommentForm.css";

interface Props {
  parkCode: string;
}

const CommentForm = ({ parkCode }: Props) => {
  const { user } = useContext(AuthContext);
  const { addComment } = useContext(CommentContext);
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

    console.log(timeFormat);

    addComment({
      text: commentText,
      username: user?.displayName!,
      dateAndTime: timeFormat,
      uid: user?.uid!,
      park_code: parkCode,
    });

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
