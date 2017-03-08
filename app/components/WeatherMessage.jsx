const React = 	require("react");

var WeatherMessage = ({temp, location}) => {
// var {temp, location} = props;
		return (
			<div>
				<h4 className="text-center">It's {temp}° in {location}</h4>
			</div>
		)	
};

module.exports = WeatherMessage;