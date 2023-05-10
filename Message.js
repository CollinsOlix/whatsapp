import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Message = (props) => {
  const { message, time, userid } = props;
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onLongPress={() => {
          "pressed long";
        }}
      >
        <View
          style={[
            styles.notch,
            {
              right: userid !== 1 ? 5 : -330,
              borderTopColor: userid !== 1 ? "rgb(31,44,52)"  : "rgb(0,93,75)",
            },
          ]}
        ></View>
        <View style={[styles.message, { right: userid !== 1 ? -7 : -120,
        backgroundColor: userid !== 1 ? "rgb(31,44,52)"  : "rgb(0,93,75)",
         }]}>
          <Text style={styles.text}>{message}</Text>
          <View style={styles.timeAndCheck}>
            <Text
              style={{
                flex: 1,
                textAlign: "right",
                color: "white",
                fontSize: 12,
                marginRight: 5,
              }}
            >
              {time}
            </Text>
            <FontAwesomeIcon icon={faCheck} size={15} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: "relative",
    paddingHorizontal: 10,
  },
  notch: {
    // position: "absolute";
    backgroundColor: "rgb(0,93,75)",
    // width: 40,
    height: 1,
    // borderBottomRightRadius: 50,
    // borderBottomLeftRadius: 50,
    width: 0,
    height: 0,
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderTopWidth: 15,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "rgb(0,93,75)",
    borderRadius: 10,
    position: "relative",
    // marginTop: 7,
    zIndex: 1,
  },
  message: {
    // left: 0,
    zIndex: 2,
    maxWidth: 230,
    backgroundColor: "rgb(0,93,75)",
    position: "relative",
    borderRadius: 10,
    // margin: 7,
    padding: 10,
    paddingBottom: 5,
    minHeight: 50,
    bottom: 15,
  },
  text: {
    color: "#fafefc",
    fontSize: 18,
  },
  timeAndCheck: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 4,
  },
});

export default Message;
// import { View, Text } from "react-native";
// import React from "react";

// const Message = () => {
//   return (
//     <View>
//       <Text>Message</Text>
//     </View>
//   );
// };

// export default Message;
