interface condition {
  text: string;
  icon: string;
}
interface location {
  country: string;
  localtime: string;
  name: string;
}
interface current {
  temp_c: number;
  temp_f: number;
  condition: condition;
}

export default interface Weather {
  location: location;
  current: current;
}
