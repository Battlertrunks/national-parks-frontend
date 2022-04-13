import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { FormEvent, useContext, useRef, useState } from "react";
import AuthContext from "../context/AuthContext";
import CommentContext from "../context/CommentContext";
import { storage } from "../firebaseConfig";
import PostModel from "../models/PostModel";
import "./SocialMediaPostForm.css";

const SocialMediaPostForm = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const { addPost } = useContext(CommentContext);
  const { user } = useContext(AuthContext);

  const fileInputImgRef = useRef<HTMLInputElement>(null);

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

    if (user) {
      const createdPost: PostModel = {
        uid: user?.uid,
        username: user?.displayName!,
        title,
        body,
        dateAndTime: timeFormat,
        likes: { amountOfLikes: 0, uids: [] },
        comments: [],
      };

      const files = fileInputImgRef.current?.files;
      if (files && files[0]) {
        const file = files[0];
        const storageRef = ref(storage, file.name);
        uploadBytes(storageRef, file).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            createdPost.imageURL = url;
            addPost(createdPost);
          });
        });
      } else {
        addPost(createdPost);
      }
    }

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
      <input ref={fileInputImgRef} type="file" name="image" id="image" />
      <button>Submit</button>
    </form>
  );
};

export default SocialMediaPostForm;
