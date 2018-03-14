export const loadState = (item, defaultValue = undefined) => {
  try {
    const serializedState = localStorage.getItem(item);

    if (serializedState === null) {
      return defaultValue;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return defaultValue;
  }
}

export const saveState = (item, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(item, serializedState);
  } catch (err) {
    console.warn("Unable to save state", err);
  }
}