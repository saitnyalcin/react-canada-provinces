import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Province from './Province';
import Capitals from './Capitals';
import Population from './Population';
import Coordinates from './Coordinates';

export default function ProvinceApi() {
  // holds the state value of the provinces
  const [data, setData] = useState([]);

  // using axios data fetching library to retrieve the data from api end point
  const fetch = () => {
    axios
      .get(
        'https://raw.githubusercontent.com/Clavicus/Testing-Requests/master/canadian-provinces.json'
      )
      .then(result => setData(result.data));
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="main-flex">
      <div className="flex-container">
        {data.map(province => (
          <Province key={province.name} province={province.name} />
        ))}
      </div>

      <div className="capital">
        {data.map(capital => (
          <Capitals key={capital.name} capital={capital.capital} />
        ))}
      </div>

      <div className="population">
        {data.map(population => (
          <Population
            key={population.name}
            population={population.population}
          />
        ))}
      </div>

      <div className="coordinates">
        {data.map(coordinate => (
          <Coordinates
            key={coordinate.name}
            latitude={coordinate.latitude}
            longitude={coordinate.longitude}
          />
        ))}
      </div>
    </div>
  );
}
