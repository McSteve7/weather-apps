import React from "react";

class Forms extends React.Component{
render(){
    return(
    
    <form onSubmit={this.props.getWeather}>
    <input id="city-section" type="text" name="city" placeholder="  City..." required />
    <input id="country-section" type="text" name="country" placeholder="  Country..." required />
    <button id="myButton">Get Weather</button>
    </form>
    );
    
}
}

export default Forms;