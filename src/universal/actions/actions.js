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
