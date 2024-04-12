import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/colors";
const NumberContainer = ({children,style}) =>{
    return(
        <View style={Styles.container}>
            <Text style={Styles.borderText}>{children}</Text>
        </View>
    )
}
export default NumberContainer;

const Styles = StyleSheet.create({
    container:{
       // fontFamily:'open-sans-bold',
        borderWidth:4,
        borderColor: Colors.accent500,
        padding:24,
        marginTop:36,
        marginHorizontal:36,
        borderRadius:8,
        fontWeight:'bold'
        
    },
    borderText:{
        color:Colors.accent500,
        fontSize: 36,
        fontWeight:'bold',
        textAlign:'center'

    }
})