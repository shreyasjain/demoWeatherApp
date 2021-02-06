import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { RootState } from './store';
import Search from './components/Search';
import Weather from './components/Weather';

const App: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);

  return (
    <div>
      <Search title="Enter city name to fetch weather:" />
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;
