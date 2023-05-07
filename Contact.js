import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Contact = (props) => {
  const { profileImg, username, message } = props;
  // const dp = require(profileImg);
  return (
    <TouchableOpacity style={styles.wrapper}>
      <TouchableOpacity>
        <Image
          source={profileImg}
          style={{ width: 60, height: 60, borderRadius: 50 }}
        />
      </TouchableOpacity>
      <View style={styles.names}>
        <Text style={styles.username} numberOfLines={1}>
          {username}
        </Text>
        <View style={styles.isRead}>
          <FontAwesomeIcon icon={faCheck} />
          <Text style={[styles.message, { color: "rgb(133,150,160)" }]}>
            {message}
          </Text>
        </View>
      </View>
      <View style={styles.time}>
        <Text style={{ color: "rgb(133,150,160)" }}>5:31 in the afternoon</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flex: 1,
    padding: 10,
    position: "relative",
  },
  username: {
    color: "white",
    fontSize: 20,
    width: 150,
  },
  message: {
    fontSize: 17,
  },
  names: {
    justifyContent: "space-between",
    margin: 10,
    marginTop: 0,
    // flex: 1,
  },
  isRead: {
    flexDirection: "row",
  },
  time: {
    position: "absolute",
    right: 0,
    top: 15,
  },
});
export default Contact;
