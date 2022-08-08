import '../index.css';

function CityTab({handleClick, isActiveOttawa, isActiveMoscow, isActiveTokyo}: {handleClick:any; isActiveOttawa:any; isActiveMoscow:any; isActiveTokyo:any;}) {  



  return (    
      <div className="tab-layout">
        <div className={isActiveOttawa} onClick={event => handleClick(1)}>OTTAWA</div>
        <div className={isActiveMoscow} onClick={event => handleClick(2)}>MOSCOW</div>
        <div className={isActiveTokyo} onClick={event => handleClick(3)}>TOKYO</div>
      </div>
  );
}

export default CityTab;