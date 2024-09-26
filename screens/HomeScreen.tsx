import GameBoard from '@/components/GameBoard/GameBoard';
import GameInformation from '@/components/GameInformation/GameInformation';
import PaintContainer from '@/components/PaintContainer/PaintContainer';
import { BLACK, BLUE, GREY, RED, WHITE } from '@/constants/TileColors';
import { Color } from '@/types/Color';
import { Player } from '@/types/Player';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  gameInformationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameBoardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
});

export function HomeScreen () {

  const [playerRed, setPlayerRed] = useState<Player>({ color: 'red', score: 0 });
  const [playerBlue, setPlayerBlue] = useState<Player>({ color: 'blue', score: 0 });

  const [colorToApply, setColorToApply] = useState<Color>(WHITE);

  const [currentPlayer, setCurentPlayer] = useState(playerRed);
  

  const handlePlayerSwitch = (): void => {
    setCurentPlayer(currentPlayer.color === 'red' ? playerBlue : playerRed);
  }

  const handleChangeColorToApply = (color: Color): void => { 
    setColorToApply(color);
  }

  return (
    <>
    <View style={styles.gameInformationContainer}>
        <GameInformation currentPlayer={currentPlayer} onSwitchPlayer={handlePlayerSwitch} />
        {/* <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <PaintContainer color={WHITE} onChangeColorToApply={handleChangeColorToApply} />
          <PaintContainer color={RED} onChangeColorToApply={handleChangeColorToApply} />
          <PaintContainer color={BLUE} onChangeColorToApply={handleChangeColorToApply} />
          <PaintContainer color={BLACK} onChangeColorToApply={handleChangeColorToApply} />
        </View> */}
    </View>
      <View style={styles.gameBoardContainer}>
        <GameBoard currentPlayer={currentPlayer} colorToApply={colorToApply} />
      </View>
    </>
  )
}
