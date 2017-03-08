const React 		= require("react");

var About = (props) => {
	return (
		<div>
			<h1>About</h1>
			<p>This weather application was built with:</p>
			<ul>
				<li>React</li>
				<li>Node</li>
				<li>Foundation Framework</li>
				<li>Open Weather Map API</li>
			</ul>
		</div>
	)
};

module.exports = About;