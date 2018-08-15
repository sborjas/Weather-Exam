import React, { Component } from "react";
import "../App.css";

class Weather extends Component {
 render(){
   return(
      <div>
        <p>TEMPERATURA: {this.props.temperature}</p>
        <p>LUGAR:{this.props.city},{this.props.country}</p>
        <p>HUMEDAD: {this.props.humidity} %</p>

      </div>

   )     
 }
}
  
  export default Weather;