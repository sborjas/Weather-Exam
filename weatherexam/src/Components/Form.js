import React, { Component } from "react";
import "../App.css";


class Form extends Component {
  render(){
    return(
      <form onSubmit={this.props.getClima}>
        <input type="text" name="ciudad" placeholder="Ciudad..."/>
        <input type="text" name="pais" placeholder="Pais..."/>
        <button>OBTENER CLIMA</button>
      </form>
    );
  }
  
}

export default Form;