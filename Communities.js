import { View, Text } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import Archived from "./Archived";

const Communities = () => {
  return (
    <View style={styles.wrapper}>
      <Archived />
      <FontAwesomeIcon icon={faUserGroup} size={250} color="rgb(133,150,160)" />
      <Text style={styles.text}>
        Communities are a great way to come together and explore a common
        interest
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={[styles.text, { color: "black" }]}>Start a Community</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "rgb(133,150,160)",
    fontWeight: 500,
  },
  button: {
    backgroundColor: "rgb(0, 168, 132)",
    padding: 20,
    paddingRight: 50,
    paddingLeft: 50,
    margin: 20,
    borderRadius: 25,
  },
});

export default Communities;
