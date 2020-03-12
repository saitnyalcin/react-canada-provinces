import React from 'react';

const Population = ({ population }) => {
  // print a number with commas as thousands separators
  var newPopulation = population.toLocaleString();

  return <div>{newPopulation}</div>;
};

export default Population;
