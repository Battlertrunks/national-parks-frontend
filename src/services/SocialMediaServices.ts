import axios from "axios";
import CommentModel from "../models/CommentModel";
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
  return (await axios.put(`${url}/like/${encodeURIComponent(id)}`, updatedPost))
    .data;
};

export const commentUserPost = async (
  id: string,
  updatedPost: CommentModel
): Promise<PostModel> => {
  return (
    await axios.put(`${url}/comment/${encodeURIComponent(id)}`, updatedPost)
  ).data;
};

export const deletePost = async (id: string): Promise<void> => {
  return (await axios.delete(`${url}/${encodeURIComponent(id)}`)).data;
};
