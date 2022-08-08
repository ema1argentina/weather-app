// eslint-disable-next-line
import React, { useState } from "react";
import ForecastItem from "./ForecastItem";

function Forecast({forecast}:{forecast:any;}) {  

  return (
    <div className="forecast-layout">
      <ForecastItem forecast={forecast[0]}/>
      <ForecastItem forecast={forecast[1]}/>
      <ForecastItem forecast={forecast[2]}/>
      <ForecastItem forecast={forecast[3]}/>
    </div>
  );
}

export default Forecast;