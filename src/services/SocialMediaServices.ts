import axios from "axios";
import CommentModel from "../models/CommentModel";
import PostModel from "../models/PostModel";

// Gets our databases for social media post information using our API as the middle man
const url: string = process.env.REACT_APP_API_POSTS_URL || "";

// gets all the post from the database
export const retrievePosts = async (): Promise<PostModel[]> => {
  return (await axios.get(url)).data;
};

// uploads user's post to the database
export const uploadPost = async (post: PostModel): Promise<void> => {
  return (await axios.post(url, post)).data;
};

// updates a post's number of likes
export const likingUserPost = async (
  id: string,
  updatedPost: PostModel
): Promise<PostModel> => {
  return (await axios.put(`${url}/like/${encodeURIComponent(id)}`, updatedPost))
    .data;
};

// updates a post with a new comment
export const commentUserPost = async (
  id: string,
  updatedPost: CommentModel
): Promise<PostModel> => {
  return (
    await axios.put(`${url}/comment/${encodeURIComponent(id)}`, updatedPost)
  ).data;
};

// deletes a user's post
export const deletePost = async (id: string): Promise<void> => {
  return (await axios.delete(`${url}/${encodeURIComponent(id)}`)).data;
};

// deletes a user's comment on a post
export const deletePostComment = async (
  id: string,
  commentId: string
): Promise<PostModel> => {
  return (
    await axios.put(
      `${url}/${encodeURIComponent(id)}/comment/delete/${encodeURIComponent(
        commentId
      )}`
    )
  ).data;
};
