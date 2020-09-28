import React, { Component } from 'react';
import { render } from "react-dom";
class DateTime extends React.Component {
state={
curTime : new Date().toLocaleString(),
}
render(){
return (
<div className="container">
   <div className="row no-gu">
      <div className="col-md-6">
         <p className="time-date"> {this.state.curTime}</p>
      </div>
   </div>
</div>
);
}
}
export default  DateTime;