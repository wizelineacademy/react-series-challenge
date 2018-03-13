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

const getColor = () => {
  const colors = [
    "#55efc4",
    "#81ecec",
    "#74b9ff",
    "#a29bfe",
    "#dfe6e9",
    "#fdcb6e",
    "#fab1a0",
    "#ff7675",
    "#fd79a8",
    "#636e72"
  ];
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};

export { db, getColor };
