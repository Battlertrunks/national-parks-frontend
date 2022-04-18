import Activities from "./Activities";

interface image {
  url: string;
  altText: string;
}

export default interface TrendingCardsModel {
  uid?: string;
  username: string;
  id: string;
  _id?: string;
  images: image[];
  fullName: string;
  description: string;
  parkCode: string;
  activities: Activities[];
}
