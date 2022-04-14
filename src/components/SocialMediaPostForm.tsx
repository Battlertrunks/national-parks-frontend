import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { FormEvent, useContext, useRef, useState } from "react";
import AuthContext from "../context/AuthContext";
import CommentContext from "../context/CommentContext";
import { storage } from "../firebaseConfig";
import PostModel from "../models/PostModel";
import "./SocialMediaPostForm.css";

const SocialMediaPostForm = () => {
  // Title of the post state
  const [title, setTitle] = useState<string>("");
  // Body text of the post state
  const [body, setBody] = useState<string>("");

  // context to add the post and check if user is logged in
  const { addPost } = useContext(CommentContext);
  const { user } = useContext(AuthContext);

  // stores images that the user uploads on a post.
  const fileInputImgRef = useRef<HTMLInputElement>(null);

  // Gets months to set the date of the post when uploaded.
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

  // Runs when the user submits the form
  const submitHandler = (e: FormEvent): void => {
    e.preventDefault(); // prevents page reload

    // sets and formats the date and time
    const currentDate = new Date();
    const currentYear: number = currentDate.getFullYear();
    const currentMonth: number = currentDate.getMonth();
    const currentDay: number = currentDate.getDate();
    const currentHours: number = currentDate.getHours();
    const currentMinutes: number = currentDate.getMinutes();
    const morningAfternoon: string = currentHours >= 12 ? "pm" : "am";

    // converts 24 hour to 12 hour clock
    const convertedHours: number = currentHours % 12 ? currentHours % 12 : 12;

    // Formats the date and time into a string
    const timeFormat: string = `${
      months[currentMonth]
    } ${currentDay}, ${currentYear} ${convertedHours}:${
      currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes
    }${morningAfternoon}`;

    // if user is logged in
    if (user) {
      // stores post information in a object variable
      const createdPost: PostModel = {
        uid: user?.uid,
        username: user?.displayName!,
        userPhoto: user?.photoURL!,
        title,
        body,
        dateAndTime: timeFormat,
        likes: { amountOfLikes: 0, uids: [] },
        comments: [],
      };

      // Stores image ref in files
      const files = fileInputImgRef.current?.files;
      // checks if files is not undefined and files[0] is not undefined.
      if (files && files[0]) {
        // stores files in index 0 to file variable
        const file = files[0];
        // using ref to get storage from firebaseConfig and file name
        // and store it inside storageRef
        const storageRef = ref(storage, file.name);
        // uploads file to the cloud
        uploadBytes(storageRef, file).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            createdPost.imageURL = url;
            // add post to post state
            addPost(createdPost);
          });
        });
      }
      // if no image was provided
      else {
        // add post to post state
        addPost(createdPost);
      }
    }

    // Reset form values
    setTitle("");
    setBody("");
    fileInputImgRef.current!.value = "";
  };

  return (
    <form className="SocialMediaPostForm" onSubmit={submitHandler}>
      <label htmlFor="title">Post Title:</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name="body"
        id="body"
        placeholder="Insert text here..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      {/* Set up to take in an image */}
      <input
        className="file-btn"
        ref={fileInputImgRef}
        type="file"
        name="image"
        id="image"
      />
      <button>Submit</button>
    </form>
  );
};

export default SocialMediaPostForm;
