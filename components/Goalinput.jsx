import  {useState}  from "react"
import { View,StyleSheet, TextInput,Text,Button} from 'react-native'

function Goalinput(props) {
  const [enterGoal,setGoal]= useState('')
  const goalHandler=(addText)=>{
    setGoal(addText)
  }
  const addGoalHandler=()=>{
    props.Addgoal(enterGoal)
  }
  return (
    <View>

<View style={styles.inputCont}>
        <TextInput
          placeholder="Your goals"
          style={styles.input}
          onChangeText={goalHandler}
          value={enterGoal}
        />
        <Button title="Add your goal" onPress={addGoalHandler} />
      </View>
    </View>
  )
}

export default Goalinput
const styles= StyleSheet.create({
  inputCont: {
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "red",
    flex: 1, // Take up one-third of the screen height
  },
  input: {
    flex: 1, // Take up remaining space
    marginRight: 10,
    backgroundColor: "white",
    borderColor: "blue",
    borderWidth: 1,
    borderStyle: "solid",
    paddingHorizontal: 8, // Horizontal padding
    paddingVertical: 4, // Vertical padding
  },

})