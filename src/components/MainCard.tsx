// eslint-disable-next-line
import React, { useState } from "react";
import Today from "./Today";
import Forecast from "./Forecast";

function MainCard({current, forecast}: {current:any; forecast:any;}) {  

  return (
    <div className="mainCard">
      <div className="mainCard-layout">
        <Today current={current}/>
        <Forecast forecast={forecast}/>
      </div>  
    </div>
  );
}

export default MainCard;