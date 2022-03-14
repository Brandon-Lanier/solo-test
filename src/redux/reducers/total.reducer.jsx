

function totalReducer(state = [], action) {
    switch (action.payload) {
        case 'SET_TOTAL':
            return [...state, action.payload]
        default:
            return state;
    }
}

export default totalReducer;