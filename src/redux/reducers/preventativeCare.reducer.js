const preventativeCare = (state = [], action) => {

    if (action.type === 'STORE_HEALTH_CATEGORIES') {
        return action.payload;
    }
    return state;
};

export default preventativeCare;