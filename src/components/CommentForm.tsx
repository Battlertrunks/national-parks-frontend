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
  // Getting user info
  const { user } = useContext(AuthContext);
  // Getting context to add comment to the park in details
  // or add comment to the posts on social media page.
  const { addCommentToPark, addCommentToPost } = useContext(CommentContext);

  // The body text that will be displayed
  const [commentText, setCommentText] = useState<string>("");

  // Storing the months when for the date the user posted a comment
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

  // Runs when the form is submitted
  const submitHandler = (e: FormEvent): void => {
    // prevents page from reloading.
    e.preventDefault();

    // This block of code gets and formats current date and time
    // to set for the comment that when it was posted
    const currentDate = new Date();
    const currentYear: number = currentDate.getFullYear();
    const currentMonth: number = currentDate.getMonth();
    const currentDay: number = currentDate.getDate();
    const currentHours: number = currentDate.getHours();
    const currentMinutes: number = currentDate.getMinutes();
    const morningAfternoon: string = currentHours >= 12 ? "pm" : "am";

    // Converts 24 hour to 12 hour clock
    const convertedHours: number = currentHours % 12 ? currentHours % 12 : 12;

    // Formating date and time
    const timeFormat: string = `${
      months[currentMonth]
    } ${currentDay}, ${currentYear} ${convertedHours}:${
      currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes
    }${morningAfternoon}`;

    // If the commentLocation is 4 or less (park code is 4 letters) then runs this.
    // This is for commenting on the parks details page.
    if (commentLocation.length <= 4) {
      addCommentToPark({
        text: commentText,
        username: user?.displayName!,
        dateAndTime: timeFormat,
        uid: user?.uid!,
        park_code: commentLocation,
      });
    }
    // This is for commenting on social media posts from others.
    else {
      //   postDetails?.comments?.push();
      addCommentToPost(postDetails?._id!, {
        text: commentText,
        username: user?.displayName!,
        dateAndTime: timeFormat,
        uid: user?.uid!,
        post_id: postDetails?._id,
        innerComments: [],
      });
    }

    // Resets the textarea to be empty.
    setCommentText("");
  };

  // The form
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
