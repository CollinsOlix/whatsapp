import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Not WhatsApp</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#314452",
    flex: 1,
  },
  header: {
    flexDirection: "row",
  },
  body: {
    backgroundColor: "#182734",
  },
  logo: {
    color: "rgb(133,150,160)",
    fontSize: 20,
  },
});
export default HomeScreen;
