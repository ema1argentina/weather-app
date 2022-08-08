import {useState} from 'react';
import CityTab from "./components/CityTab";
import MainCard from "./components/MainCard";

import './App.css';

function App() {

  const [isActiveOttawa, setIsActiveOttawa] = useState("");
  const [isActiveMoscow, setIsActiveMoscow] = useState("");
  const [isActiveTokyo, setIsActiveTokyo] = useState("");

  const [current, setCurrent] = useState({day:"-",temp:"",icon:"-",desc:""});
  const [forecast, setForecast] = useState([{},{},{},{}]);

  /*
   * Function to select Icon
   */
  const selectIcon = (desc: any) => {
    let icon="";
    if(desc==="Clouds")
      icon="WiDayCloudy";
    else if(desc==="Clear")
      icon="WiDaySunny";
    else if(desc==="Rain")
      icon="WiDayRain";
    else if(desc==="Snow")
      icon="WiDaySnow";
    else if(desc==="Wind")
      icon="WiDayCloudyGusts";
    else if(desc==="Thunderstorm")
      icon="WiDayThunderstorm";
    else if(desc==="Mist")
      icon="WiDayFog";
    return icon;
  }
  /*
   * Function to call Open Weather API
   */
  const bringDayName = (APIdate: any) => {
    let myDay= new Date(APIdate);
    return myDay.toLocaleDateString('en-US', {weekday: 'long'});
  }
  /*
   * Function to call Open Weather API
   */
  const callWeatherAPI = (city: any) => {
    console.log(city);
    let url = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric&appid=d32aae6cc8bcd97133f1b0820a86b492";
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          //Set Today's weather object               
          setCurrent({ day:"Today", temp:(result.list[0].main.temp|0).toString()+"°",icon:selectIcon( result.list[0].weather[0].main ), desc:result.list[0].weather[0].main });
          //Set weather Forecast array
          setForecast([
            { day:bringDayName(result.list[5].dt_txt), temp:(result.list[5].main.temp | 0)+"°", icon:selectIcon( result.list[5].weather[0].main ) },
            { day:bringDayName(result.list[10].dt_txt), temp:(result.list[10].main.temp | 0)+"°", icon:selectIcon( result.list[10].weather[0].main ) },
            { day:bringDayName(result.list[15].dt_txt), temp:(result.list[15].main.temp | 0)+"°", icon:selectIcon( result.list[15].weather[0].main ) },
            { day:bringDayName(result.list[20].dt_txt), temp:(result.list[20].main.temp | 0)+"°", icon:selectIcon( result.list[20].weather[0].main ) }
          ]);
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  /*
   * Handle User Click on Cities Tab bar
   */
  const handleClick = (city: any) => {
    //Set class Initial Values
    setIsActiveOttawa("");
    setIsActiveMoscow("");
    setIsActiveTokyo("");        
    
    switch(city) {
      case 1:
        //Set Bar selected
        setIsActiveOttawa("selected");
        //Call API
        callWeatherAPI("Ottawa");        
        break;
      case 2:
        //Set Bar selected
        setIsActiveMoscow("selected");
        //Call API
        callWeatherAPI("Moscow");        
        break;
        case 3:
          //Set Bar selected
          setIsActiveTokyo("selected");
          //Call API
          callWeatherAPI("Tokyo");          
          break;
    }
  }

  return (
    <div className="noselect">      
      <CityTab handleClick={handleClick} isActiveOttawa={isActiveOttawa} isActiveMoscow={isActiveMoscow} isActiveTokyo={isActiveTokyo} />
      <MainCard current={current} forecast={forecast}/>
    </div>
  );
}

export default App;
