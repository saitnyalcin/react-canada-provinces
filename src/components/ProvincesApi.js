import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProvinceApi() {
  const [data, setData] = useState([]);

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
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
    </div>
  );
}
