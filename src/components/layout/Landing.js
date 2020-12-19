import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Fragment>
      <div className="background"></div>
      <div className="overlay"></div>
      <div className="landing-content">
        <div className="hero">
          <h1 className="title">TC Film Festival 2020</h1>
          <p>August 25th - August 29th</p>
          <Link to="/films" className="btn">
            View films
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
