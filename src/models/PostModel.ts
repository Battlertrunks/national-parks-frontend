import CommentModel from "./CommentModel";

export default interface PostModels {
  uid: string;
  _id?: string;
  title: string;
  body: string;
  username: string;
  dateAndTime: string;
  imageURL?: string;
  likes: Likes;
  comments?: CommentModel[];
}

interface Likes {
  amountOfLikes: number;
  uids: string[];
}
