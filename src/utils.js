const partial = (fn, first) => second => fn(first, second);

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

export { partial, getColor };
