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
      <Text style={styles.text}>{tile.revealed ? tile.word : ''}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tile: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
  },
  text: {
    color: '#000',
    fontSize: 16,
  },
});

export default TileComponent;
