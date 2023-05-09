import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons/faWifi";
import { faCamera } from "@fortawesome/free-solid-svg-icons/faCamera";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";
import { faEllipsisV, faSearch } from "@fortawesome/free-solid-svg-icons";
import Archived from "./Archived";
import Sections from "./Sections";
import SwipeComponent from "./SwipeComponent";
import { TouchableOpacity } from "react-native";
import Communities from "./Communities";
import Chats from "./Chats";
import { useContext } from "react";
import { SectionContext } from "./Context";
import Groups from "./Groups";
import Status from "./Status";
import Calls from "./Calls";
import { Platform } from "react-native";

const HomeScreen = () => {
  const { indexValue } = useContext(SectionContext);
  const [selectedItem, setSelectedItem] = indexValue;
  console.log(selectedItem, " is Sselected");
  const screens = [
    <Communities />,
    <Chats />,
    <Groups />,
    <Status />,
    <Calls />,
  ];
  return (
    <SafeAreaView
      style={[
        styles.container,
        { paddingTop: Platform.OS == "android" ? 20 : 0 },
      ]}
    >
      <View style={styles.header}>
        <View style={styles.logoArea}>
          <View style={styles.logoWrap}>
            <Text style={styles.logo}>Not WhatsApp</Text>
          </View>
          <View style={styles.navIcon}>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faWifi} style={faStyle.icon} size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faSun} style={faStyle.icon} size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faSearch} style={faStyle.icon} size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faCamera} style={faStyle.icon} size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesomeIcon
                icon={faEllipsisV}
                style={faStyle.icon}
                size={25}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Sections />
      </View>
      <View style={styles.body}>
        <SwipeComponent>{screens[selectedItem]}</SwipeComponent>
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
    paddingTop: 25,
    // paddingBottom: 25,
    paddingRight: 10,
    paddingLeft: 10,
  },
  logoArea: {
    flexDirection: "row",
    marginBottom: 20,
  },
  body: {
    backgroundColor: "#182734",
    flex: 1,
  },
  logo: {
    color: "rgb(133,150,160)",
    fontSize: 21,
    fontWeight: "500",
    marginRight: 20,
  },
  logoWrap: {},
  navIcon: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
});
const faStyle = StyleSheet.create({
  icon: {
    color: "rgb(133,150,160)",
    size: 50,
  },
});
export default HomeScreen;
