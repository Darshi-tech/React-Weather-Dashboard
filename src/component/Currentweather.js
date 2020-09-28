import React, { Component } from 'react';
class Currentweather extends Component {
render() {
return (
<div>
   <div className="current-location">Colombo, Sri Lanka</div>
   <div>
      <div className="float-left">
         <div className="icon sun-shower">
            <div className="cloud"></div>
            <div className="cloud"></div>
            <div className="cloud cloud-second"></div>
            <div className="sun">
               <div className="rays"></div>
            </div>
         </div>
      </div>
      <div>
         <div className="temp">29<sup>0 C</sup></div>
         <div className="temp-text">partly cloudy</div>
      </div>
   </div>
</div>
);
}
}
export default Currentweather;