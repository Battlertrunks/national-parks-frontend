interface activities {
  id: string;
  name: string;
}

interface emailAddresses {
  emailAddress: string;
}

interface phoneNumbers {
  phoneNumber: string;
}

interface contacts {
  phoneNumbers: phoneNumbers[];
  emailAddresses: emailAddresses[];
}

interface images {
  url: string;
  altText: string;
}

interface addresses {
  postalCode: string;
  city: string;
  stateCode: string;
  line1: string;
}

export default interface data {
  id: string;
  parkCode: string;
  fullName: string;
  description: string;
  activities: activities[];
  images: images[];
  states: string;
  contacts: contacts;
  addresses: addresses[];
}

export default interface ParkDetailsCard {
  data: data;
}
