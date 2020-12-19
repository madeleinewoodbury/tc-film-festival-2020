import React from 'react';
import Film from '../films/Film';
import { schedule } from '../../films';
import placeholderPoster from '../../img/placeholder-poster.png';

const Schedule = () => {
  return schedule.length < 1 ? (
    <div className="container schedule">
      <h1>Schedule to be announced...</h1>
    </div>
  ) : (
    <div className="container schedule">
      <h1>Official Schedule</h1>
      <div className="films">
        {schedule.map((scheduled) => (
          <div className="scheduled-film" key={scheduled.id}>
            <h2>{scheduled.date}</h2>
            <h3>{scheduled.time}</h3>
            {scheduled.film !== null ? (
              <Film key={scheduled.id} film={scheduled.film} />
            ) : (
              <div className="film">
                <div className="img-container">
                  <img
                    className="poster"
                    src={placeholderPoster}
                    alt="Placeholder poster"
                  />
                </div>
                <div className="info">
                  <div>
                    <h3>TBA</h3>
                    <p className="hide-sm">Stay tuned for schedule updates</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
