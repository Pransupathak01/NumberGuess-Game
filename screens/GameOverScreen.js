import { View, Text, Image, StyleSheet } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";
const GameOverScreen = ({onGameStart}) =>{
    return(
        <View style={styles.rootContainer}>
            <Title>GAME OVER</Title>
            <View style={styles.imageContainer}>
            <Image 
            source={require('../assets/gameOver.png')}
            style={styles.image}
            />
            </View>
            <View>
                <Text style={styles.summaryText}>Your phone nodded <Text style={styles.hightlightText}>X</Text> rounds to guess the number <Text style={styles.hightlightText}>Y</Text></Text>
            </View>
            <PrimaryButton onPress={onGameStart}>Start New Game</PrimaryButton>
            
        </View>
    )
}
export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:24

    },
    summaryText:{       
       fontSize:28,
        textAlign:'center',
        fontWeight:'500',
        paddingVertical:20
    },
    hightlightText:{
        fontWeight:'800',
        color:Colors.primary600


    },
    imageContainer:{
        alignItems:'center',
        width: 350,
        height: 350,
        borderRadius:175,
        borderWidth:3,
        borderColor:Colors.primary700,
        overflow:'hidden',
        margin:38
    },
    image:{
        width:'100%',
        height:'100%',
        
        
    }
})