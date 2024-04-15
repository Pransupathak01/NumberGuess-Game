import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { height, width } = useWindowDimensions();

  const NumberInputHandler = (changedInput) => {
    setEnteredNumber(changedInput);
  };
  const resetInputHandler = () => {
    setEnteredNumber("");
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 to 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(enteredNumber);
  };

  const marginTopDistance = height < 420 ? 30 : 80;
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              inputMode="numeric"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="default"
              value={enteredNumber}
              onChangeText={NumberInputHandler}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton
                  style={styles.primaryButton}
                  onPress={resetInputHandler}
                >
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton
                  style={styles.primaryButton}
                  onPress={confirmInputHandler}
                >
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
export default StartGameScreen;

//const deviceHeight = Dimensions.get('window').height
// Dimensions api will not render again if height changed it still on initial height
//because it outside function component so use useWindowDimensions hook

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    //marginTop:  100,
    paddingHorizontal: 24,
    minWidth: "70%",
  },

  numberInput: {
    height: 50,
    width: 60,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: Platform.OS === 'web' ? 16 : 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    margin: 8,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "space-around",
  },
  primaryButton: {
    minWidth: 90,
  },
});
