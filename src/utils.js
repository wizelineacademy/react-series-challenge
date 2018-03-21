const db = {
  get(key) {
    try {
      const encoded = window.localStorage.getItem(key);
      return encoded ? JSON.parse(encoded) : undefined;
    } catch (err) {
      return undefined;
    }
  },
  set(key, value) {
    try {
      const encoded = JSON.stringify(value);
      window.localStorage.setItem(key, encoded);
    } catch (err) {
      return console.log(err);
    }
  }
};

export { db };
