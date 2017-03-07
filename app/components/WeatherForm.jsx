const React = 	require("react");


var WeatherForm = React.createClass({
	
	onFormSubmit: function (element) {
		element.preventDefault();

		var location = this.refs.location.value;

		if (location.length > 0 ) {
			this.refs.location.value = "";
			this.props.onSearch(location);
		}
	},

	render: function () {
		return (
			<div>
				<h3>Get Weather</h3>
				<form onSubmit={this.onFormSubmit} >
					<div>
						<input type="text" ref="location"/>
					</div>
					<div>
						<button>Get Weather</button>
					</div>
				</form>
			</div>
		)
	}
});

module.exports = WeatherForm;