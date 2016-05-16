import { assign } from 'lodash';

let initialState = {};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ACTION':
			return assign(state, action.data);
		default:
			return state;
	}
}

export default reducer;