'use strict';

import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/actions';

class About extends React.Component {

	render() {
		return (
			<section className= 'container' >
				<h1>Welcome to the about page!</h1>
			</section >
		);
	};
}

const mapStateToProps = state => ({
	reducer: state.reducer
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(Actions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(About);