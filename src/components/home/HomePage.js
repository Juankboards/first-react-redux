import React from 'react';
import {Link} from 'react-router';

class HomePgae extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h1>App React Reduc</h1>
				<p>This is my first react reduc app using router, ES6</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
			</div>
		);
	}
}

export default HomePgae;