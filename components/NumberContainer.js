import { Text, View, StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/colors";
const NumberContainer = ({children,style}) =>{
    return(
        <View style={Styles.container}>
            <Text style={Styles.borderText}>{children}</Text>
        </View>
    )
}
export default NumberContainer;
const deviceWidth = Dimensions.get('window').width;

const Styles = StyleSheet.create({
    container:{
       // fontFamily:'open-sans-bold',
        borderWidth:4,
        borderColor: Colors.accent500,
        padding:deviceWidth< 380 ? 18 : 24,
        marginTop:deviceWidth< 380 ? 18 : 28,
        marginHorizontal:deviceWidth< 380 ? 18 : 28,
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