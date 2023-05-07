import { TouchableWithoutFeedback, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";

const Conversation = () => {
  return (
    <TouchableWithoutFeedback
      style={{ flex: 1, backgroundColor: "red" }}
      onPressIn={() => console.log("in")}
      onPressOut={() => console.log("out")}
      onPress={() => console.log("in-out")}
    >
      <Text>Conversation</Text>
    </TouchableWithoutFeedback>
  );
};

export default Conversation;
