import React, { FC, useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { getWeather} from '../store/actions/weatherActions';

interface SearchProps {
  title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getWeather(city));
    setCity('');
  }

  return(
    <div>
      <div>
        <div>
          <h1 >{title}</h1>
          <form  onSubmit={submitHandler}>
            <input 
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={changeHandler}
            />
            <button>Search</button>
          </form>
        </div>
      </div>
    </div>
  );  
}

export default Search;