interface image {
  url: string;
  altText: string;
}

export default interface TrendingCardsModel {
  id: string;
  images: image[];
  fullName: string;
  description: string;
  parkCode: string;
}
