import React from "react";
import { Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

const Item = (props) => {
  const { index, item, selectedItem, setSelectedItem } = props;
  const item1 = (
    <TouchableOpacity
      style={[
        styles.touchables,
        {
          borderBottomWidth: 0,
          borderBottomWidth: index === selectedItem ? 5 : 0,
        },
      ]}
      onPress={() => {
        setSelectedItem(index);
        console.log(index, selectedItem);
      }}
    >
      <FontAwesomeIcon
        icon={faUserGroup}
        size={25}
        style={[
          styles.text,
          {
            color:
              selectedItem === index ? "rgb(0, 168, 132)" : "rgb(133,150,160)",
          },
        ]}
      />
    </TouchableOpacity>
  );
  const item2 = (
    <TouchableOpacity
      style={[
        styles.touchables,
        {
          borderBottomWidth: 0,
          borderBottomWidth: index === selectedItem ? 5 : 0,
        },
      ]}
      onPress={() => {
        setSelectedItem(index);
        console.log(index, selectedItem);
      }}
    >
      <Text
        style={[
          styles.text,
          {
            color:
              selectedItem === index ? "rgb(0, 168, 132)" : "rgb(133,150,160)",
          },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>{index < 1 ? item1 : item2}</View>
    // return <Text>Swap</Text>;
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 19,
  },
  wrapper: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    alignItems: "stretch",
  },
  touchables: {
    padding: 7,
    paddingRight: 11,
    paddingLeft: 11,
    paddingTop: 5,
    paddingBottom: 10,
    borderBottomColor: "rgb(0, 168, 132)",
    borderStyle: "solid",
    flex: 1,
  },
});
export default Item;
