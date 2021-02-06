export const GET_WEATHER = 'GET_WEATHER';

export interface WeatherData {main: {
    humidity: number;
    pressure: number;
    temp: number;
  };
  name: string;
  sys: {
    country: string;
  };
  wind: {
    speed: number;
  };
}

export interface WeatherState {
  data: WeatherData | null;
}

interface GetWeatherAction {
  type: typeof GET_WEATHER;
  payload: WeatherData;
}

export type WeatherAction = GetWeatherAction
