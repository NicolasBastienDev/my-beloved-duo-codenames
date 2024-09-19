import { Color } from "@/types/Color";
import { Tile } from "@/types/Tile";

const RED: Color = 'RED';
const WHITE: Color = 'WHITE';
const BLUE: Color = 'BLUE';
const BLACK: Color = 'BLACK';

export const generateBoard = (rows: number, cols: number): Tile[][] => {
  const totalCells = rows * cols;
  const colorsArray = [
    ...Array(9).fill(newTile(RED)),
    ...Array(8).fill(newTile(BLUE)),
    newTile(BLACK),
    ...Array(totalCells - 18).fill(newTile(WHITE)),
  ];

  for (let i = colorsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [colorsArray[i], colorsArray[j]] = [colorsArray[j], colorsArray[i]];
  }

  const board = [];
  for (let i = 0; i < rows; i++) {
    board.push(colorsArray.slice(i * cols, i * cols + cols));
  }

  return board;
};

const newTile = (color: Color) => ({
  color,
  word: '',
  revealed: false,
});
