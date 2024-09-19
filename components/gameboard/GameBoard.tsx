import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import { generateBoard } from '@/utils/board-data';
import Square from './Square';
import { Tile } from '@/types/Tile';

const GameBoard: React.FC = () => {

  const [board, setBoard] = useState<Tile[][]>(generateBoard(5, 5));
  (board)

  const revealTile = (rowIndex: number, colIndex: number) => {
    const newBoard = board.map((row, rIdx) =>
      row.map((tile, cIdx) => {
        if (rIdx === rowIndex && cIdx === colIndex) {
          return { ...tile, revealed: true };
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
            <Square
              key={colIndex}
              tile={tile}
              onPress={() => revealTile(rowIndex, colIndex)}
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
