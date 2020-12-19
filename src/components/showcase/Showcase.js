import React, { useEffect, useState } from 'react';
import { filmData } from '../../films';

const Showcase = ({ match }) => {
  const [data, setData] = useState({
    film: {},
    loading: true,
  });

  const setCurrentFilm = async () => {
    const current = await filmData.filter(
      (film) => film.id.toString() === match.params.id
    );

    if (current.length > 0) {
      setData({ film: current[0], loading: false });
    }
  };

  useEffect(() => {
    setCurrentFilm();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      {data.loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="showcase">
          <h1 className="title">
            {data.film.title} ({data.film.year})
          </h1>
          <div className="info">
            <span className="rating">{data.film.rating}</span>
            <span className="runtime">{data.film.length} min</span>
            <span className="genre">{data.film.genre}</span>
            <span className="released">{data.film.country}</span>
          </div>
          <div className="content">
            <div className="left">
              <div className="poster">
                <img src={data.film.poster} alt={`${data.film.title} poster`} />
              </div>
              <div className="credits">
                <p className="director">
                  <strong>Director: </strong>
                  {data.film.director}
                </p>
                <p className="writer">
                  <strong>Writer: </strong>
                  {data.film.writer}
                </p>
                <p className="stars">
                  <strong>Stars: </strong>
                  {data.film.stars}
                </p>
              </div>
            </div>
            <div className="right">
              <div className="about">
                <p className="lead">{data.film.description}</p>
                {data.film.storyline && (
                  <p className="plot">{data.film.storyline}</p>
                )}
              </div>
              <div className="trailer">
                <iframe
                  title={data.film.title}
                  src={data.film.video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Showcase;
