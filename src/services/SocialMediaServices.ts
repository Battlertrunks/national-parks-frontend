import axios from "axios";
import PostModels from "../models/PostModel";

const url: string = process.env.REACT_APP_API_POSTS_URL || "";

export const retrievePosts = async (): Promise<PostModels[]> => {
  return (await axios.get(url)).data;
};

export const uploadPost = async (post: PostModels): Promise<void> => {
  return (await axios.post(url, post)).data;
};
