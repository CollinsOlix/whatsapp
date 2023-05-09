import { View, Text } from "react-native";
import React from "react";
import Archived from "./Archived";
import Contact from "./Contact";
import { FlatList } from "react-native";

const contacts = [
  {
    id: "1",
    username: "Collins Olisakwe Nigerian",
    message: "How is your day going",
    profileImg: require("./photos/dp.png"),
  },
  {
    id: "2",
    username: "Collins Olisakwe Nigerian",
    message: "How is your day going",
    profileImg: require("./photos/dp.png"),
  },
  {
    id: "3",
    username: "Chinese Business Man",
    message: "I am an honourable business man",
    profileImg: require("./photos/profile.jpeg"),
  },
  {
    id: "4",
    username: "Collins Olisakwe Nigerian",
    message: "How is your day going",
    profileImg: require("./photos/dp.png"),
  },
  {
    id: "5",
    username: "Collins Olisakwe Nigerian",
    message: "How is your day going",
    profileImg: require("./photos/dp.png"),
  },
  {
    id: "6",
    username: "Collins Olisakwe Nigerian",
    message: "How is your day going",
    profileImg: require("./photos/dp.png"),
  },
  {
    id: "7",
    username: "Collins Olisakwe Nigerian",
    message: "How is your day going",
    profileImg: require("./photos/dp.png"),
  },
  {
    id: "8",
    username: "Collins Olisakwe Nigerian",
    message: "How is your day going",
    profileImg: require("./photos/dp.png"),
  },
];

const Chats = () => {
  return (
    <>
      <Archived />
      <FlatList
        data={contacts}
        renderItem={({ item }) => (
          <Contact
            profileImg={item.profileImg}
            message={item.message}
            username={item.username}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  )
};

export default Chats;
