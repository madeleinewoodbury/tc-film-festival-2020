import React, { useState, useEffect } from 'react';
import Film from './Film';
import { filmData, getCategories, getCountries } from '../../films';

const Films = () => {
  const [category, setCategory] = useState('All');
  const [country, setCountry] = useState('All');
  const [films, setFilms] = useState([]);
  const [genres] = useState(getCategories());
  const [countries] = useState(getCountries());

  useEffect(() => {
    if (category === 'All' && country === 'All') {
      setFilms(filmData);
    } else {
      if (category === 'All') {
        setFilms(filmData.filter((film) => film.country.includes(country)));
      } else if (country === 'All') {
        setFilms(filmData.filter((film) => film.genre.includes(category)));
      } else {
        let filmList = filmData.filter((film) => film.genre.includes(category));
        setFilms(filmList.filter((film) => film.country.includes(country)));
      }
    }
  }, [category, country]);

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            {genres.map((item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <select
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="All">All Countries</option>
            {countries.map((item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </form>
      <div className="films-container">
        {films.map((film) => (
          <Film key={film.id} film={film} />
        ))}
      </div>
    </div>
  );
};

export default Films;
