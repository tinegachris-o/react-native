import {StyleSheet,View,Text} from 'react-native'

function Goalitem({texts}) {
  return (
    <View style={styles.goalItem}>
    <Text style={styles.goalText}>{texts}</Text>
  </View>
  )
}

export default Goalitem
const styles= StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 3,
       // backgroundColor: "#800080",
       backgroundColor:"orange",
        padding: 8,
      },
      goalText: {
        color: "white",
      },
})