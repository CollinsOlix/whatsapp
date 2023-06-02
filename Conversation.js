import React from "react";
import {
  Platform,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
  ScrollView,
} from "react-native";
import {} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowLeft,
  faCamera,
  faEllipsisV,
  faLanguage,
  faMicrophone,
  faPaperclip,
  faPhone,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import Message from "./Message";
import { useState, useRef } from "react";
import { faPaperPlane, faSmile } from "@fortawesome/free-regular-svg-icons";

const Conversation = ({ route, navigation }) => {
  const flatListRef = useRef();
  const [isFocus, setIsFocus] = useState(false);
  const [textBool, setTextBool] = useState(false);
  const [textInput, setTextInput] = useState("Message");
  const navigate = useNavigation();
  const { profileImg, username, message } = route.params;
  const [messages, setMessages] = useState([
    {
      message: "Make the most outta today",
      id: 2,
      time: "3:30",
      key: Math.random() * 12.3,
    },
    {
      message: "Okay, Will do!",
      id: 1,
      time: "3:30",
      key: Math.random() * 12.3,
    },
    {
      message: "Make the most outta today",
      id: 2,
      time: "3:30",
      key: Math.random() * 12.3,
    },
    {
      message: "Make the most outta today",
      id: 2,
      time: "3:30",
      key: Math.random() * 12.3,
    },
    {
      message: "Make the most outta today",
      id: 2,
      time: "3:30",
      key: Math.random() * 12.3,
    },
    {
      message: "Okay, Will do!",
      id: 1,
      time: "3:30",
      key: Math.random() * 12.3,
    },
    {
      message: "Make the most outta today",
      id: 2,
      time: "3:30",
      key: Math.random() * 12.3,
    },
    {
      message: "Make the most outta today",
      id: 2,
      time: "3:30",
      key: Math.random() * 12.3,
    },
    {
      message: "Make the most outta today",
      id: 2,
      time: "3:30",
      key: Math.random() * 12.3,
    },
    {
      message: "Okay, Will do!",
      id: 1,
      time: "3:30",
      key: Math.random() * 12.3,
    },
    {
      message: "Make the most outta today",
      id: 2,
      time: "3:30",
      key: Math.random() * 12.3,
    },
    {
      message: "Make the most outta today",
      id: 2,
      time: "3:30",
      key: Math.random() * 12.3,
    },
    {
      message: "Make the most outta today",
      id: 1,
      time: "3:30",
      key: Math.random() * 12.3,
    },
    {
      message: "Okay, Will do!",
      id: 1,
      time: "3:30",
      key: Math.random() * 12.3,
    },
    {
      message: "Make the most outta today",
      id: 2,
      time: "3:30",
      key: Math.random() * 12.3,
    },
    {
      message: "Make the most outta today",
      id: 2,
      time: "3:30",
      key: Math.random() * 12.3,
    },
  ]);
  const submitMessage = (textInput) => {
    flatListRef.current.scrollToEnd();
    let oldMessages = messages;
    let date = new Date();
    oldMessages.push({
      message: textInput,
      time: `${date.getHours()}:${date.getMinutes()}`,
      id: 1,
      key: Math.random() * 12.3,
    });
    setMessages([...oldMessages]);
    setTextInput("Message");
  };

  return (
    <SafeAreaView
      style={[styles.wrapper, { paddingTop: Platform.OS == "android" && 20 }]}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigate.navigate("HomeScreen")}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size={30}
            style={[styles.icons, { marginTop: 2 }]}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={profileImg}
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              margin: 10,
              marginTop: 2,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text numberOfLines={1} style={styles.username}>
            {username}
          </Text>
          <Text style={styles.time}>last seen at 5:31</Text>
        </TouchableOpacity>
        <View style={styles.more}>
          <TouchableOpacity>
            <FontAwesomeIcon
              icon={faVideoCamera}
              style={[styles.icons, { color: "white" }]}
              size={27}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesomeIcon
              icon={faPhone}
              style={[styles.icons, { color: "white" }]}
              size={23}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesomeIcon
              icon={faEllipsisV}
              style={styles.icons}
              size={27}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.status}>Busy</Text>
        <FlatList
          style={{ marginBottom: 60 }}
          ref={flatListRef}
          data={messages}
          renderItem={({ item }) => (
            // <Text>Message goes here</Text>
            <Message message={item.message} time={item.time} userid={item.id} />
          )}
          keyExtractor={(item) => item.key}
        />
        <View
          style={[
            styles.messageArea,
            {
              bottom: isFocus == false ? 0 : 300,
            },
          ]}
        >
          <View style={styles.messageInput}>
            <FontAwesomeIcon
              icon={faSmile}
              size={32}
              style={{ color: "rgb(133,150,160)", marginRight: 10 }}
            />
            <TextInput
              multiline
              editable
              value={textInput}
              style={{
                fontSize: 20,
                flex: 1,
                width: 50,
                fontSize: isFocus == true ? 19 : 20,
                color: isFocus == true ? "#eaeceb" : "rgb(133,150,160)",
                maxHeight: 90,
              }}
              clearTextOnFocus={true}
              onChangeText={(textInput) => {
                setTextInput(textInput);
                setTextBool(textInput.length == 0 ? false : true);
              }}
              onFocus={() => {
                setIsFocus(true);
                setTextInput("");
                flatListRef.current.scrollToEnd();
              }}
              scrollToIndexFailed={() => scrollToIndexFailed()}
              onBlur={() => {
                setIsFocus(false);
              }}
              onSubmitEditing={() => {}}
            />
            <TouchableOpacity>
              <FontAwesomeIcon
                icon={faLanguage}
                size={37}
                style={styles.icons}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesomeIcon
                icon={faPaperclip}
                size={30}
                style={styles.icons}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesomeIcon
                icon={faCamera}
                size={30}
                style={[
                  styles.icons,
                  { display: isFocus == true ? "none" : "flex" },
                ]}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              marginRight: 5,
              backgroundColor: "rgb(0, 168, 132)",
              padding: 15,
              borderRadius: 50,
            }}
            onPress={() => submitMessage(textInput)}
          >
            <FontAwesomeIcon
              icon={
                (isFocus && textBool) === false ? faMicrophone : faPaperPlane
              }
              size={30}
              style={{ color: "rgb(233,237,240)" }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: "#314452",
  },
  header: {
    paddingTop: 20,
    flexDirection: "row",
  },
  username: {
    color: "white",
    fontSize: 20,
    width: 150,
  },
  more: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    paddingLeft: 10,
  },
  icons: {
    color: "rgb(133,150,160)",
    marginHorizontal: 3,
  },
  time: {
    color: "white",
  },
  body: {
    flex: 1,
    backgroundColor: "#e4efe4",
    position: "relative",
  },
  status: {
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
  },
  messageArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute",
  },
  messageInput: {
    padding: 10,
    flex: 1,
    backgroundColor: "#314452",
    margin: 10,
    marginHorizontal: 5,
    borderRadius: 40,
    flexDirection: "row",
    alignItems: "center",
    // height: "fit-content",
  },
});
export default Conversation;
