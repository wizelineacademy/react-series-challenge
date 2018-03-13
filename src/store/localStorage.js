const STATE_KEY = 'STATE';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STATE_KEY);
    if (serializedState ===  null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STATE_KEY, serializedState);
  } catch (error) {
    console.log(error);
  }
};
