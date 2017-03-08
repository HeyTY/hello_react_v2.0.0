const React 	= require("react");
const {Link,IndexLink}    = require("react-router");


var Nav = React.createClass ({
	
	onSearch: function (element) {
		element.preventDefault();
		alert("Not yet wired up!")
	},

	render: function () {
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">WeatherApp</li>
						<li>
							<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:"bold"}}>Weather</IndexLink>
						</li>
						<li>
							<Link to="/about" activeClassName="active" activeStyle={{fontWeight:"bold"}}>About</Link>
						</li>
						<li>
							<Link to="/examples" activeClassName="active" activeStyle={{fontWeight:"bold"}}>Examples</Link>
						</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<form onSubmit={this.onSearch}>
						<ul className="menu">
							<li>
								<input type="search" placeholder="Search Weather"/>
							</li>
							<li>
								<button type="button" className="button">Search</button>
							</li>
						</ul>
					</form>
				</div>
			</div>
		)	
	}
});


module.exports = Nav;

