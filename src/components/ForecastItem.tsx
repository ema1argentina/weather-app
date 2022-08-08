import { WiDayCloudy, WiDaySunny, WiDayRain, WiDaySnow, WiDayCloudyGusts, WiDayThunderstorm, WiDayFog } from "react-icons/wi";

function ForecastItem({forecast}:{forecast:any;}) {  

  let icon;
  if( forecast.icon === "WiDayCloudy" )
    icon = <WiDayCloudy className="verticalAlign" size={70}/>;
  else if( forecast.icon === "WiDaySunny" )
    icon = <WiDaySunny className="verticalAlign" size={70}/>;
  else if( forecast.icon === "WiDayRain" )
    icon = <WiDayRain className="verticalAlign" size={70}/>;
  else if( forecast.icon === "WiDaySnow" )
    icon = <WiDaySnow className="verticalAlign" size={70}/>;
  else if( forecast.icon === "WiDayCloudyGusts" )
    icon = <WiDayCloudyGusts className="verticalAlign" size={70}/>;
  else if( forecast.icon === "WiDayThunderstorm" )
    icon = <WiDayThunderstorm className="verticalAlign" size={70}/>;
  else if( forecast.icon === "WiDayFog" )
    icon = <WiDayFog className="verticalAlign" size={70}/>;
  else
    icon = "-";
  
    return (
    <div className="forecastItem-layout">
      <div className="forecastItemDay">{forecast.day}</div>
      {icon}
      <div className="forecastItemTemp">{forecast.temp}</div>
    </div>
  );
}

export default ForecastItem;