import React, { useEffect, useState } from "react";
import Capitals from "./Capitals";
import Coordinates from "./Coordinates";
import Population from "./Population";
import Province from "./Province";

export default function ProvinceApi() {
  // holds the state value of the provinces
  const [data, setData] = useState([]);

  // using axios data fetching library to retrieve the data from api end point
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function callApiFunc() {
    await fetch(
      "https://raw.githubusercontent.com/Clavicus/Testing-Requests/master/canadian-provinces.json"
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    callApiFunc();
  }, []);

  return (
    <div className="main-flex">
      <div className="flex-container">
        {data.map((province) => (
          <Province key={province.name} province={province.name} />
        ))}
      </div>

      <div className="capital">
        {data.map((capital) => (
          <Capitals key={capital.name} capital={capital.capital} />
        ))}
      </div>

      <div className="population">
        {data.map((population) => (
          <Population
            key={population.name}
            population={population.population}
          />
        ))}
      </div>

      <div className="coordinates">
        {data.map((coordinate) => (
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
