import { View, StyleSheet,Platform, Dimensions } from "react-native";
import Colors from "../constants/colors";
const Card = ({children})=>{
    return(
        <View style={styles.inputContainer}>
            {children}
        </View>
    )
}
export default Card;
const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    inputContainer: {
        minWidth: "70%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: deviceWidth < 380 ? 24 : 32,
        marginHorizontal: 24,
        padding: Platform.select({ios: 20 ,android: 15, web: 30}),
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, // Show only in Android
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.6,
        shadowRadius: 6,
      },

})
