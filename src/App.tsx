import React, { PropsWithChildren, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageSourcePropType, Pressable, TouchableOpacity, SafeAreaView } from 'react-native';

import DiceOne from "../assets/one.png";
import DiceTwo from "../assets/two.png";
import DiceThree from "../assets/three.png";
import DiceFour from "../assets/four.png";
import DiceFive from "../assets/five.png";
import DiceSix from "../assets/six.png";


type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({ imageUrl }: DiceProps) => {
  return (
    <View>
      <Image style={{ height: 200, width: 200 }} source={imageUrl} />
    </View>
  )

}
export default function App() {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceFour)

  const rollTheDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
      default:
        setDiceImage(DiceFour)
        break;
    }
  }
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Dice imageUrl={diceImage} />
        <TouchableOpacity onPress={rollTheDiceOnTap}><Text style={styles.rollDiceButton}>Roll the Dice</Text></TouchableOpacity>
      </SafeAreaView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceContainer: {
    margin: 12
  },
  rollDiceButton: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#E5E0FF",
    fontSize: 16,
    color: "black",
    backgroundColor: "lightgrey"
  }
});
