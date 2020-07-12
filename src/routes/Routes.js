import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from '../pages';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/about' component={Home} />
				<Route path='/projects' component={Home} />
			</Switch>
		</Router>
	);
};

export default Routes;
