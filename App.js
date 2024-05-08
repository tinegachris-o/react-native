import React, { useState } from "react";
//import { v4 as uuidv4 } from "uuid";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

import Goalinput from "./components/Goalinput";
import Goalitem from "./components/Goalitem";
export default function App() {
  //const [enterGoal, setGoal] = useState("");
  const [enterGoal,setGoal]= useState('')
  
  const [courseGoal, setCourseGoal] = useState([]);
 const goalHandler=(addText)=>{
    setGoal(addText)
  }
  const addHandler = () => {
    // const newGoal =;
    setCourseGoal((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), text: enterGoal },
    ]);
    setGoal(""); // Clear the input after adding a goal
  };

  return (
    <View style={styles.container}>
      {/* <Goalinput Addgoal={addHandler} />
       */}
      <View>
        <View style={styles.inputCont}>
          <TextInput
            placeholder="Your goals"
            style={styles.input}
            onChangeText={goalHandler}
            value={enterGoal}
          />
          <Button title="Add your goal" onPress={addHandler} />
        </View>
      </View>
      <View style={styles.goalCont}>
        <FlatList
          data={courseGoal}
          renderItem={(itemData) => {
            return <Goalitem texts={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 6,
    paddingTop: 5,
    marginTop: 15,
    height: "100vh",
  },

  goalCont: {
    flex: 5, // Take up two-thirds of the screen height
    justifyContent: "center", // Center text vertically
    alignItems: "center", // Center text horizontally
  },
  

});
