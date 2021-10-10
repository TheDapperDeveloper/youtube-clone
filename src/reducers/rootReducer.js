const initialState = {
    videos:[],
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_VIDEOS":
        return {...state, videos: action.payload};

        default:
            return state;
    }
}