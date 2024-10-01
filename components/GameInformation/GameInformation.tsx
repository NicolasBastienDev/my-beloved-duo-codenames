import { Player } from '@/types/Player';
import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Badge, Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  centeredDiv: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeStyle: {
    minWidth: 100, 
    minHeight: 30,
    borderRadius: 15,
  },
  textStyle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 16,
    marginVertical: 5,
  },
  iconStyle: {
    marginTop: 10,
  },
});

interface GameInformationProps {
  currentPlayer: Player;
  onSwitchPlayer: (player: Player) => void;
}

const GameInformation: React.FC<GameInformationProps> = ({ currentPlayer, onSwitchPlayer }) => {
  return (
    <View style={styles.centeredDiv}>
      <Text style={{ fontSize: 16 }}>Game Information</Text>
      <Badge 
        value={`Joueur ${currentPlayer.color}`} 
        badgeStyle={[styles.badgeStyle, { backgroundColor: currentPlayer.color }]} 
        textStyle={styles.textStyle}
      />
      <Text style={styles.infoText}>Red Score: 0</Text>
      <Text style={styles.infoText}>Blue Score: 0</Text>
      <Icon
        name="refresh"
        type="font-awesome"
        color="#000"
        size={30}
        containerStyle={styles.iconStyle}
        onPress={() => {
          onSwitchPlayer(currentPlayer);
        }}
      />
    </View>
  );
}

export default GameInformation;
