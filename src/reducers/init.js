
const initialState = {
  isLoading: true,
  isAuthenticated: false,
  identity: {},
};

const initRed = (state = initialState, action) => {
  const { type } = action;

  switch (type) {

    default:
      return state;
  }
};

export default initRed;