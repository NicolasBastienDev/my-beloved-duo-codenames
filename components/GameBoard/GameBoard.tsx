import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import { generateBaseBoard, generateBoard } from '@/utils/board-data';
import TileComponent from './Tile';
import { Tile } from '@/types/Tile';
import { Color } from '@/types/Color';
import { Player } from '@/types/Player';

interface GameBoardProps {
  currentPlayer: Player;
  colorToApply: Color;
}

const GameBoard: React.FC<GameBoardProps> = ({currentPlayer, colorToApply}) => {

  const [board, setBoard] = useState<Tile[][]>(generateBoard(5, 5));

  const toggleTile = (rowIndex: number, colIndex: number) => {
    const newBoard = board.map((row, rIdx) =>
      row.map((tile, cIdx) => {
        if (rIdx === rowIndex && cIdx === colIndex) {
          console.log(tile)
          return { ...tile, revealed: !tile.revealed} as Tile;
        }
        return tile;
      })
    );
    setBoard(newBoard);
  };


  interface SquareProps {

    tile: Tile;
  
    onPress: () => void;
  
  }

  return (
    <View style={styles.container}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((tile, colIndex) => (
            <TileComponent
              key={colIndex}
              tile={tile}
              onPress={() => toggleTile(rowIndex, colIndex)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    maxHeight: '50%',
    aspectRatio: 1,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  row: {
    flexDirection: 'row',
  },
});

export default GameBoard;
