import { Tile } from '@/types/Tile';
import React from 'react';
import { View, StyleSheet } from 'react-native';

interface SquareProps {

  tile: Tile;

  onPress: () => void;

}

const Square: React.FC<SquareProps> = ({ tile, onPress }) => {
  (tile.color)
  return <View style={[styles.square, { backgroundColor: tile.color.toLowerCase() }]} />;
};

const styles = StyleSheet.create({
  square: {
    width: 50,
    height: 50,
    margin: 5
  },
});

export default Square;
