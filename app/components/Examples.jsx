const React 		= require("react");
const {Link}		= require("react-router");

var Examples = (props) =>{
	return (
		<div>
			<h1>Examples</h1>
			<p>Here are a few examples to try out:</p>
			<ol>
				<li>
					<Link to="/?location=New York City">New York City</Link>
				</li>
				<li>
					<Link to="/?location=San Francisco">San Francisco</Link>
				</li>
				<li>
					<Link to="/?location=Los Angelos">Los Angeles</Link>
				</li>
			</ol>
		</div>
	)
};

module.exports = Examples;