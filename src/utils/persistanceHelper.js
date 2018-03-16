export const loadState = (item, defaultValue = undefined) => {
    const serializedState = localStorage.getItem(item);
    if (serializedState === null) {
      return defaultValue;
    }
    return JSON.parse(serializedState);
}

export const saveState = (item, state) => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(item, serializedState);
}