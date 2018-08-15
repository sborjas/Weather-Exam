import React from 'react';
import axios from 'axios';
 
class Form extends React.Component {
    constructor(){
        super();
        this.state={
          weather: ''
        }
  }

  updateSearch(event){
    this.setState({weath: event.target.value})
  }

  componentDidMount() {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=${SAP},+${HN}&appid=${2ea32dd2a94a0aa7dd21f56f7f5cc190}&units=metric')
      .then(res => {
        const weather = res.data;
        this.setState({ weather });
      })
  }

  render() {
    return (
      <ul>
        { this.state.weather.map(weather => <li>{weather.temperature}</li>)}
      </ul>
    )
  }
}

export default Form;