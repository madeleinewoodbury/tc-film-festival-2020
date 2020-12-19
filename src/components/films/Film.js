import React from 'react';
import { Link } from 'react-router-dom';

const Film = ({ film }) => {
  return (
    <div className="film">
      <div className="img-container">
        <img
          className="poster"
          src={film.poster}
          alt={`${film.title} poster`}
        />
      </div>
      <div className="info">
        <div>
          <h3>{film.title}</h3>
          <p className="hide-sm">{film.genre}</p>
          <p className="hide-sm">{film.year}</p>
        </div>
        <div>
          <Link to={`/films/${film.id}`} className="btn">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Film;
