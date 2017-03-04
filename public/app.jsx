var GreeterMessage = React.createClass({
	render: function() {
		var name = this.props.name;

		return (
			<div>
				<h1>Hello {name}! </h1>
				<p>Auto Generated Message</p>		
			</div>
		);
	}
});


var GreeterForm = React.createClass({
	
	onFormSubmit: function (event) {
		event.preventDefault();

		var name = this.refs.name.value

		if (name.length > 0) {
			this.refs.name.value = "";
			this.props.onNewName(name);
		}
	},
	render: function () {
		return (
			<form onSubmit={this.onFormSubmit} >
				<input type="text" ref="name"/>
				<button>Set Name</button>
			</form>
		);
	}
});


var Greeter = React.createClass({
	

	getDefaultProps: function () {
		return {
			name: "Default Props Name",
			message: "Default Props Message"
		};
	},

	getInitialState: function () {
		return {
			// name: "Default Initialized State Name"
			name: this.props.name
		};
	},

	handleNewName: function (name) {
		this.setState({
			name: name
		});
	
	},

	render: function () {
		var name 	= this.state.name;
		var message = this.props.message;

		return (
			<div>
				<GreeterMessage name={name} />
				<GreeterForm onNewName={this.handleNewName} />
			</div>
		)
	}
});


var firstName = "Ty";

ReactDOM.render(
<Greeter name={firstName} message= "I am a software Engineer 2.0" />,
document.getElementById("app")
);

