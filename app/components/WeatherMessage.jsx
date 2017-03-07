const React = 	require("react");

var WeatherMessage = ({temp, location}) => {
// var {temp, location} = props;
		return (
			<div>
				<h4>It's {temp} degrees in {location}</h4>
			</div>
		)	
};

module.exports = WeatherMessage;