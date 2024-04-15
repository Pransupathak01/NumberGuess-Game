import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import Colors from "../constants/colors";
const PrimaryButton = ({ children, style, onPress }) => {
  
  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        style={({pressed})=> pressed?[styles.buttonInnerContainer, styles.pressed]: styles.buttonInnerContainer}       
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};
export default PrimaryButton;
const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: Platform.OS === 'web' ? 16 :4,
    overflow: 'hidden'
  },
  buttonInnerContainer: {   
    backgroundColor: Colors.primary600,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    
  },
  buttonText: {   
    color: "white",
    textAlign: "center",
    fontWeight:'500'
  },
  pressed:{
    opacity:'0.75'
}
});
