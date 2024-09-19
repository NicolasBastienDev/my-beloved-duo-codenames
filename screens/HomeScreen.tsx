import GameBoard from '@/components/gameboard/GameBoard';
import { StyleSheet, View, Text, Image } from 'react-native';

const styles = StyleSheet.create({
  centeredDiv: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
});

export function HomeScreen () {
  return (
    <>
      <View style={styles.centeredDiv}>
        <GameBoard />
      </View>
    </>
  )
}
