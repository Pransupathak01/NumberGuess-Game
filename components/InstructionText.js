import { Text,StyleSheet } from "react-native"
const InstructionText = ({children}) =>{
    return <Text style={[styles.instructionText]}>{children}</Text>
}

export default InstructionText;
const styles = StyleSheet.create({
    instructionText:{
        color:'white',
        fontWeight:'400',
        fontSize:22,
        margin:10
    
      },
})