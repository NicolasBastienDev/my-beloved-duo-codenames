import GameBoard from '@/components/GameBoard/GameBoard';
import GameInformation from '@/components/GameInformation/GameInformation';
import PaintContainer from '@/components/PaintContainer/PaintContainer';
import { BLACK, BLUE, GREY, RED, WHITE } from '@/constants/TileColors';
import { Color } from '@/types/Color';
import { Player } from '@/types/Player';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableHighlight, Alert } from 'react-native';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import { useEffect } from 'react';

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
  connectionStatus: {
    position: 'absolute', // Position absolue pour placer en bas
    bottom: 0, // Coller au bas de l'écran
    left: 0,
    right: 0,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  connectionText: {
    color: 'white',
    textAlign: 'center',
  },
});

export function HomeScreen () {

  const [playerRed, setPlayerRed] = useState<Player>({ color: 'red', score: 0 });
  const [playerBlue, setPlayerBlue] = useState<Player>({ color: 'blue', score: 0 });
  const [isConnected, setIsConnected] = useState<boolean | null>(true);


  const [colorToApply, setColorToApply] = useState<Color>(WHITE);

  const [currentPlayer, setCurentPlayer] = useState(playerRed);
  
  useEffect(() => {
    // Fonction de gestion des changements d'état
    const handleUnsubscribe = (state: NetInfoState) => {
      // Log de l'état de la connexion
      console.log("État de la connexion:", state.isConnected ? "Connecté" : "Déconnecté");

      // Mettre à jour l'état local
      setIsConnected(state.isConnected);

      // Afficher une alerte en fonction de l'état de la connexion
      if (!state.isConnected) {
        Alert.alert('Pas de connexion Internet', 'Veuillez vérifier votre connexion Internet');
      } else {
        Alert.alert('Connexion Internet', 'Vous êtes connecté à Internet');
      }
    };

    // Ajouter l'écouteur
    const unsubscribe = NetInfo.addEventListener(handleUnsubscribe);

    // Nettoyage de l'écouteur à la destruction du composant
    return () => {
      unsubscribe();
    };
  }, []);
  
  

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

      <View style={[styles.connectionStatus, { backgroundColor: isConnected ? 'green' : 'red' }]}>
      <View>
  </View>
        <Text style={styles.connectionText}>
          {isConnected ? 'Connecté à Internet' : 'Pas de connexion Internet'}
        </Text>
      </View>
    </>
  )
}
