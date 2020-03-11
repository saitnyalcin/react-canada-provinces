import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProvinceApi() {
  // holds the state value of the provinces
  const [data, setData] = useState([]);
  // set the updated state of the details of the hovered province in the list
  const [capital, setCapital] = useState('Alberta');
  const [population, setPopulation] = useState('4067175');
  const [latitude, setLatitude] = useState('53.9332706');
  const [longitude, setLongtitude] = useState('-116.5765035');

  // assingn the static url of the api
  var ApiRequest =
    'https://raw.githubusercontent.com/Clavicus/Testing-Requests/master/canadian-provinces.json';

  useEffect(() => {
    axios.get(ApiRequest).then(result => setData(result.data));
  }, [ApiRequest]);

  return (
    <div className="main-flex">
      <div className="flex-container">
        {data.map(item => (
          <div key={item.name}>{item.name}</div>
        ))}
      </div>

      <div className="province-details">
        <div>Capital : {capital}</div>
        <div>Population : {population}</div>
        <div>
          Latitude : {latitude} | Longitude : {longitude}
        </div>
      </div>
    </div>
  );
}
