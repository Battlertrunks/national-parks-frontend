interface condition {
  text: string;
  icon: string;
}
interface location {
  name: string;
  country: string;
  localtime: string;
}
interface current {
  temp_c: number;
  temp_f: number;
  condition: condition;
}

export default interface WeatherModel {
  location: location;
  current: current;
}
