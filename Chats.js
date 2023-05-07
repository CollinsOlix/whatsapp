import { View, Text } from "react-native";
import React from "react";
import Archived from "./Archived";

const Chats = () => {
  return (
    <View>
      <Archived />
      <View>
        <Text style={{color: "white"}}>Chats</Text>
      </View>
    </View>
  );
};

export default Chats;
