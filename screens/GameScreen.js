import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/Title";
import { useEffect, useState, useRef } from "react";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import GuessLogItem from "../components/GuessLogItem";

const generateNumberBetween = (min, max, exclude) => {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return generateNumberBetween(min, max, exclude);
  } else {
    return randomNum;
  }
};

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { height, width } = useWindowDimensions();
  const minBoundary = useRef(1);
  const maxBoundary = useRef(100);
  const guessRoundsListLength = guessRounds.length;

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary.current = currentGuess;
    } else {
      minBoundary.current = currentGuess + 1;
    }

    if (currentGuess == userNumber) {
      onGameOver(guessRounds.length);
    }
    const newRandomNum = generateNumberBetween(
      minBoundary.current,
      maxBoundary.current,
      currentGuess
    );
    setCurrentGuess(newRandomNum);
    setGuessRounds((prevGuessRounds) => [newRandomNum, ...prevGuessRounds]);
    console.log(currentGuess, userNumber);
  };

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or lower</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              {/* <Ionicons name="md-add" size={24} color="white" /> */}-
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              +
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500 && height<700) {
    content = (
      <>
      <View style={styles.wideContent}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
        </View>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
      </View>
      </>
    );
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        {/* {guessRounds.map(guessRound => <Text key={guessRound}> {guessRound}</Text>)} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 32,
  },
  wideContent:{
    flexDirection: "row",
    alignItems:'center'
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    padding: 20,
  },
  listContainer: {
    flex: 1,
    padding: 4,
  },
  
});
