import { WeatherState, WeatherAction, GET_WEATHER} from "../types";

const initialState: WeatherState = {
  data: null
}

export default (state = initialState, action: WeatherAction): WeatherState => {
  switch(action.type) {
    case GET_WEATHER:
      return {
        data: action.payload
      }
    default: 
      return state;
  }
}