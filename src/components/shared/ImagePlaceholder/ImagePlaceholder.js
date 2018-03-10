import React from "react";

import { ColorBoxStyled } from "./ImagePlaceholder.styled";

const COLORS = [
  "#ff6b6b",
  "#48dbfb",
  "#1dd1a1",
  "#c8d6e5",
  "#5f27cd",
  "#222f3e",
  "#6ab04c"
];

const getRandomColor = (r = Math.floor(Math.random() * 7)) => COLORS[r];

const ImagePlaceholder = ({ height, width }) => (
  <ColorBoxStyled color={getRandomColor()} height={height} width={width} />
);

export default ImagePlaceholder;
