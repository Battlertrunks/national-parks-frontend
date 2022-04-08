interface image {
  url: string;
  altText: string;
}

export default interface TrendingCardsModel {
  uid?: string;
  id: string;
  images: image[];
  fullName: string;
  description: string;
  parkCode: string;
}
