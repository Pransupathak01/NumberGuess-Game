import { View, Text, Image, StyleSheet, Dimensions, useWindowDimensions } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";
const GameOverScreen = ({roundsNumber,userNumber,onGameStart}) =>{
    const { height, width } = useWindowDimensions();

    let imageSize = 300;
    if(width < 380){
        imageSize = 200;
    }
    if(height < 450){
        imageSize = 120
    }
    const imageStyle = {
        width: imageSize,
        height: imageSize,
        margin: imageSize/6
    }
    
    
    return(
        <View style={styles.rootContainer}>
            <Title>GAME OVER</Title>
            <View style={[styles.imageContainer,imageStyle ]}>
            <Image 
            source={require('../assets/gameOver.png')}
            style={styles.image}
            />
            </View>
            <View>
                <Text style={styles.summaryText}>Your phone needed <Text style={styles.hightlightText}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.hightlightText}>{userNumber}.</Text></Text>
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
        paddingBottom:15
    },
    hightlightText:{
        fontWeight:'800',
        color:Colors.primary600

    },
    imageContainer:{
        alignItems:'center',
        // width: imageWidth < 380 ? 250 : 300 || imageHeight >500? 120:imageWidth,
        // height: imageWidth < 380 ? 250 : 300 || imageHeight >500? 120:imageWidth,
        borderRadius:175,
        borderWidth:3,
        borderColor:Colors.primary700,
        overflow:'hidden',
        //margin: 36
    },
    image:{
        width:'100%',
        height:'100%',
        
        
    }
})