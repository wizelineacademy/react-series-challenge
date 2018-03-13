const db = {
  get(key) {
    const encoded = window.localStorage.getItem(key);
    return JSON.parse(encoded);
  },
  set(key, value) {
    const encoded = JSON.stringify(value);
    window.localStorage.setItem(key, encoded);
  }
};

export { db };
