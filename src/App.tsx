import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageSourcePropType, TouchableOpacity, SafeAreaView } from 'react-native';



const diceImages: Record<number, ImageSourcePropType> = {
  1: require("../assets/one.png"),
  2: require("../assets/two.png"),
  3: require("../assets/three.png"),
  4: require("../assets/four.png"),
  5: require("../assets/five.png"),
  6: require("../assets/six.png"),
};

const randomNumber = () => Math.floor(Math.random() * 6) + 1;

const rollDices = () => {
  let dice1 = randomNumber();
  let dice2 = randomNumber();
  while (dice1 === dice2) {
    dice2 = randomNumber(); // Ensure dice are different
  }
  return [dice1, dice2];
}

export default function App() {
  const [dice, setDice] = useState([1, 2]);
  const rollTheDiceOnTap = () => {
    setDice(rollDices());
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image source={diceImages[dice[0]]} style={{ width: 200, height: 200 }} />
        <Image source={diceImages[dice[1]]} style={{ width: 200, height: 200 }} />
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
