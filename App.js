import { useState } from "react";
import { useFonts } from "expo-font";
import { Inter_900Black } from '@expo-google-fonts/inter';
import { SafeAreaView, ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";


export default function App() {
  const [userNumber, setuserNumber]=useState();
  const [gameOver, setGameOver]=useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const[fontLoaded]=useFonts({
   // Inter_900Black
    'open-sans':require("./assets/OpenSans-Bold.ttf"),
    'open-sans-bold':require('./assets/OpenSans-Bold.ttf')
  })
  // if (!fontLoaded){
  //   return <AppLoading/>
  // }
  
  const pickedNumberHandler = (pickedNumber)=>{
    setuserNumber(pickedNumber);
    setGameOver(false);
  }
  const gameOverHandler =(numberOfRounds) =>{
    setGameOver(true);
    setGuessRounds(numberOfRounds);
  }
  const gameStartHandler = () =>{
    setGameOver(false)
    setuserNumber(null)
    setGuessRounds(0)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>
  if (userNumber && !gameOver){
    screen =<GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }
  if(gameOver && userNumber ){
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onGameStart={gameStartHandler}/>
  }
  
  return (
    <>
    <StatusBar style="light"/>
    <LinearGradient colors={["#212F3C", "#ECF0F1"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/dice.png")}
        resizeMode="cover"
        style={styles.imageBackground}
        imageStyle={styles.overlay}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    //alignItems: "center",
    //backgroundColor: "#ddb52f",
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    
  },
  overlay: {
    opacity: 0.2,
  },
});
