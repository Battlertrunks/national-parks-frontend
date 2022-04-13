export default interface CommentModel {
  _id?: string;
  uid: string;
  dateAndTime: string;
  username: string;
  text: string;
  park_code?: string;
  post_id?: string;
  innerComments?: CommentModel[];
}
