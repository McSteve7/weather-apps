import React from "react";

class Weather extends React.Component{
render(){
    return(
<div id="weather-result">
{this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
{this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
{this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
{this.props.pressure && <p>Pressure: {this.props.pressure}</p>}
{this.props.description && <p>Condition: {this.props.description}</p>}
{this.props.error && <p>Error!: {this.props.error}</p>}

<h6 id="footer-message">Built with love by Ajiboye Damilola</h6>
</div>


    );
}
}

export default Weather;