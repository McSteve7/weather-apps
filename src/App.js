import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from "./components/Forms"
import Titles from "./components/Titles"
import Weather from "./components/Weather"


const API_KEY = "6157e890d885dc4181d115089f315042";

class App extends React.Component{
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    pressure: "",
    description: "",
    error: ""
  }
 getWeather = async(e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  
  const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
  const data = await api_call.json();

 if (city && country){

  this.setState({
    temperature: data.main.temp,
    city: data.name,
    country: data.sys.country,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    description: data.weather[0].description,
    error: ""
  })
 }else{
  this.setState({
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    pressure: "",
    description:"",
    error: "Please enter the values"
  })
 } 
}

render(){
  return(
  <div>
  <Titles  />
  <Forms getWeather={this.getWeather} />
  <Weather temperature={this.state.temperature}
  city={this.state.city}
  country={this.state.country}
  humidity={this.state.humidity}
  pressure={this.state.pressure}
  description={this.state.description}
  error={this.state.error}
  />
  </div>
  );
}

}

export default App;


