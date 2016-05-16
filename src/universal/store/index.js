import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import thunk from 'redux-thunk'


const create = (isClient, initialState = {}) => {
	if (!isClient) {
		return createStore(rootReducer, initialState, compose(applyMiddleware(thunk)));
	} else {
		let state = window && window.__INITIAL_STATE__ ? window.__INITIAL_STATE__ : initialState;
		return createStore(rootReducer, window.__INITIAL_STATE__, compose(applyMiddleware(thunk)));
	}
};

export default create;