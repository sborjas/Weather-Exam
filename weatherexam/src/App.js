import React, { Component } from 'react';
import Form from "./Components/Form";
import Weather from "./Components/Weather";
import './App.css';

const API = "2ea32dd2a94a0aa7dd21f56f7f5cc190";
class App extends Component {

  state = {
    temperature: '',
    city: '',
    country: '',
    humidity:''

  }
  getClima = async(e) =>{
    e.preventDefault();
    const city = e.target.elements.ciudad.value;
    const country = e.target.elements.pais.value;
    const llamada = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API}&u
    nits=metric`); 
    const data = await llamada.json();
    console.log(data);

    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity
    })
  }

  render() {
    return (
        <div className="app">
          <div className="inside">
            <Form getClima={this.getClima}/>
            <Weather temperature={this.state.temperature}
            city ={this.state.city}
            country = {this.state.country}
            humidity = {this.state.humidity}       
            />
          </div>  
        </div>    
    
    );
  }
}

export default App;
