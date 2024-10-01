import { RED, BLUE, BLACK, WHITE, GREY } from "@/constants/TileColors";
import { Color } from "@/types/Color";
import { Tile } from "@/types/Tile";
import { words } from "@/constants/Words";
import { pickRandomStringFromArrayString } from "./array";

export const generateBoard = (rows: number, cols: number): Tile[][] => {
  const totalCells = rows * cols;
  
  const colorsArray: Tile[] = [
    ...Array(9).fill(null).map(() => newTile(RED)),
    ...Array(8).fill(null).map(() => newTile(BLUE)),
    newTile(BLACK),
    ...Array(totalCells - 18).fill(null).map(() => newTile(WHITE)),
  ];


  for (let i = colorsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [colorsArray[i], colorsArray[j]] = [colorsArray[j], colorsArray[i]];
  }

  const board: Tile[][] = [];
  for (let i = 0; i < rows; i++) {
    board.push(colorsArray.slice(i * cols, i * cols + cols));
  }

  fillBoardWithWords(board, [...words]);
  return board;
};

export const generateBaseBoard = (rows: number, cols: number): Tile[][] => {
  const baseBoard: Tile[][] = Array.from({ length: rows }, () => Array(cols).fill(newTile(GREY)));
  return baseBoard;
};

const newTile = (color: Color): Tile => ({
  color,
  word: '',
  revealed: false,
});

const fillBoardWithWords = (board: Tile[][], availableWords: string[]): void => {
  const totalCells = board.length * board[0].length;
  if (availableWords.length < totalCells) {
    throw new Error("Not enough words to fill the board");
  }

  for (let row of board) {
    for (let tile of row) {
      const word = pickRandomStringFromArrayString(availableWords);

      availableWords = availableWords.filter((w) => w !== word);

      tile.word = word;
    }
  }
};
