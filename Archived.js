import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native";

const Archived = () => {
  return (
    <TouchableOpacity>
      <View style={styles.archived}>
        <FontAwesomeIcon icon={faInbox} size={25} style={faStyle.icon} />
        <View style={{ flex: 1 }}>
          <Text style={{ color: "rgb(133,150,160)", fontSize: 20 }}>
            Archived
          </Text>
        </View>
        <Text style={{ color: "rgb(0, 168, 132)" }}>1</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  archived: {
    // flex: 1,
    // backgroundColor: "blue",
    width: 375,
    flexDirection: "row",
    padding: 20,
  },
});
const faStyle = StyleSheet.create({
  icon: {
    color: "rgb(133,150,160)",
    marginRight: 30,
  },
});
export default Archived;
