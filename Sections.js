import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import Items from "./Items";
import SwipeComponent from "./SwipeComponent";
import { useState, useContext } from "react";
import { SectionContext } from "./Context";

const sectionItems = [
  { id: 1, title: "icon" },
  { id: 2, title: "Chats" },
  { id: 3, title: "Groups" },
  { id: 4, title: "Status" },
  { id: 5, title: "Calls" },
];
const Sections = () => {
  const { indexValue } = useContext(SectionContext);
  const [selectedItem, setSelectedItem] = indexValue;
  return (
    <SwipeComponent
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
    >
      <View style={styles.sections}>
        <FlatList
          horizontal
          scrollEnabled={false}
          data={sectionItems}
          renderItem={
            ({ item, index }) => (
              <Items
                style={styles.items}
                index={index}
                item={item.title}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            )
            // <Text>DoSum</Text>
          }
          keyExtractor={(item) => item.id}
          extraData={selectedItem}
        />
      </View>
    </SwipeComponent>
  );
};

const styles = StyleSheet.create({
  sections: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    marginTop: 10,
  },
  items: {
    flex: 1,
  },
});

export default Sections;
