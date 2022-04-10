import Activities from "./Activities";

interface image {
  url: string;
  altText: string;
}

export default interface CompletedParks {
  uid?: string;
  id: string;
  _id?: string;
  images: image[];
  fullName: string;
  description: string;
  parkCode: string;
  activities: Activities[];
}
