import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProvinceApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/Clavicus/Testing-Requests/master/canadian-provinces.json'
      )
      .then(result => setData(result.data));
  }, []);

  return (
    <div className="flex-container">
      {data.map(item => (
        <div key={item.name}>{item.name}</div>
      ))}
    </div>
  );
}
