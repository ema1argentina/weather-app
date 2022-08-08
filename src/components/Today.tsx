import { WiDayCloudy, WiDaySunny, WiDayRain, WiDaySnow, WiDayCloudyGusts, WiDayThunderstorm, WiDayFog } from "react-icons/wi";

function Today({current}:{current:any;}) {  
  let icon;
  if( current.icon === "WiDayCloudy" )
    icon = <WiDayCloudy className="verticalAlign" size={100}/>;
  else if( current.icon === "WiDaySunny" )
    icon = <WiDaySunny className="verticalAlign" size={100}/>;
  else if( current.icon === "WiDayRain" )
    icon = <WiDayRain className="verticalAlign" size={100}/>;
  else if( current.icon === "WiDaySnow" )
    icon = <WiDaySnow className="verticalAlign" size={100}/>;
  else if( current.icon === "WiDayCloudyGusts" )
    icon = <WiDayCloudyGusts className="verticalAlign" size={100}/>;
  else if( current.icon === "WiDayThunderstorm" )
    icon = <WiDayThunderstorm className="verticalAlign" size={100}/>;
  else if( current.icon === "WiDayFog" )
    icon = <WiDayFog className="verticalAlign" size={100}/>;
  else
    icon = "";

  return (
    <div className="today-layout centerComponents">
      <div className="todayDay">{current.day}</div>
      <div className="todayWeather">
        {icon}
        <div className="todayWeatherText">
          <div className="todayTemp verticalAlign">{current.temp}</div>
          <div className="todayDesc verticalAlign">{current.desc}</div>
        </div>
      </div>
    </div>
  );
}

export default Today;