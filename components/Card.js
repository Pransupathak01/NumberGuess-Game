import { View, StyleSheet } from "react-native";
import Colors from "../constants/colors";
const Card = ({children})=>{
    return(
        <View style={styles.inputContainer}>
            {children}
        </View>
    )
}
export default Card;
const styles = StyleSheet.create({
    inputContainer: {
        minWidth: "70%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        marginHorizontal: 24,
        padding: 20,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, // Show only in Android
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.6,
        shadowRadius: 6,
      },

})
