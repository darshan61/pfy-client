// import React from 'react';
import Authform from '../components/Authform';
import pfyImg from '../assets/images/pfy-main.jpg';

const Main = () => (
  <div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-4">
          <h1>Welcome to Personal Finance</h1>
          <Authform />
        </div>
        <div className="col">
          <img src={pfyImg} className="img-fluid" alt="Personal Finance" />
        </div>
      </div>
      <div className="row" />
    </div>
  </div>
);

export default Main;
