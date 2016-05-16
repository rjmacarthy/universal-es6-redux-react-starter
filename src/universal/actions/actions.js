

export const fetch = () => {
	return (dispatch) => {
		dispatch(get({}));
	};
};

export const get = (data) => {
	return {
		type: 'ACTION',
		data: data
	};
};

export const appLoaded = () =>{
	return {
		type : 'LOADED',
		data : true
	}
}