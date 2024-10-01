import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Tile } from '@/types/Tile';
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import { RED, BLUE, WHITE, BLACK, GREY } from '@/constants/TileColors';

interface TileProps {
  tile: Tile;
  onPress: () => void;
}

const TileComponent: React.FC<TileProps> = ({ tile, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.tile,
        { 
          backgroundColor: tile.revealed ? tile.color === RED ? RED.hex :
          tile.color === BLUE ? BLUE.hex :
          tile.color === WHITE ? WHITE.hex :
          tile.color === BLACK ? BLACK.hex :
          tile.color === GREY ? GREY.hex : GREY.hex : GREY.hex
        },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: tile.revealed ? 'white' : 'black' }]}>{tile.word}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    minWidth: 40,
    minHeight: 30,
    maxWidth: '100%',
    maxHeight: '100%',
    width: 40,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
  },
  text: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default TileComponent;
