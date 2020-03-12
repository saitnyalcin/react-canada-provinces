import React from 'react';

const Coordinates = ({ latitude, longitude }) => {
  return (
    <div className="coor-flex">
      <div>Lat: {latitude}</div>
      <div>Long: {longitude}</div>
    </div>
  );
};

export default Coordinates;
