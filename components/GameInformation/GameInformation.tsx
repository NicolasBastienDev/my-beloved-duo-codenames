import { Player } from '@/types/Player';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from "react-native"
import { Badge, Button, Icon } from 'react-native-elements'

const styles = StyleSheet.create({
  centeredDiv: {
    justifyContent: 'center',
    alignItems: 'center',
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
      <Badge value={`Joueur ${currentPlayer.color}`} badgeStyle={{ backgroundColor: currentPlayer.color }} />
      <Text style={{ fontSize: 16 }}>Red Score: 0</Text>
      <Text style={{ fontSize: 16 }}>Blue Score: 0</Text>
      <Icon
      name="refresh"
      type="font-awesome"
      color="#000"
      size={30}
      containerStyle={{ marginTop: 10 }}
      onPress={() => {
        onSwitchPlayer(currentPlayer);
      }}
      />
    </View>
  )
}

export default GameInformation;
