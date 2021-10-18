const initialState = [];

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_VIDEOS":
      return { ...action.payload };

    default:
      return state;
  }
};
