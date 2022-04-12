import axios from "axios";
import PostModel from "../models/PostModel";

const url: string = process.env.REACT_APP_API_POSTS_URL || "";

export const retrievePosts = async (): Promise<PostModel[]> => {
  return (await axios.get(url)).data;
};

export const uploadPost = async (post: PostModel): Promise<void> => {
  return (await axios.post(url, post)).data;
};

export const likingUserPost = async (
  id: string,
  updatedPost: PostModel
): Promise<PostModel> => {
  return (await axios.put(`${url}/${encodeURIComponent(id)}`, updatedPost))
    .data;
};
