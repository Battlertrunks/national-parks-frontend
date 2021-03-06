interface image {
  url: string;
  altText: string;
  caption: string;
}

export default interface data {
  title: string;
  url: string;
  abstract: string;
  image: image;
  id: string;
}

export default interface NewsCardModel {
  data: data[];
}
