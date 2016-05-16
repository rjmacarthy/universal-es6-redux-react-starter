'use strict';

import * as React from 'react';

class App extends React.Component {
	render(){
		const { children } = this.props;
		return (
			<div>
				{children}
			</div>
		);
	};
};

export default App;