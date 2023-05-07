import * as React from "react";
import { ScrollView, Dimensions } from "react-native";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { SectionContext } from "./Context";

// import { useSwipe } from "../hooks/useSwipe";
const windowWidth = Dimensions.get("window").width;

export function useSwipe(onSwipeLeft, onSwipeRight, rangeOffset = 4) {
  let firstTouch = 0;

  // set user touch start position
  function onTouchStart(e) {
    firstTouch = e.nativeEvent.pageX;
  }

  // when touch ends check for swipe directions
  function onTouchEnd(e) {
    // get touch position and screen size
    const positionX = e.nativeEvent.pageX;
    const range = windowWidth / rangeOffset;

    // check if position is growing positively and has reached specified range
    if (positionX - firstTouch > range) {
      onSwipeRight && onSwipeRight();
    }
    // check if position is growing negatively and has reached specified range
    else if (firstTouch - positionX > range) {
      onSwipeLeft && onSwipeLeft();
    }
  }

  return { onTouchStart, onTouchEnd };
}

export default function ExampleComponent(props) {
  const { indexValue } = useContext(SectionContext);
  const [selectedItem, setSelectedItem] = indexValue;
  const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6);
  const navigate = useNavigation();
  function onSwipeLeft() {
    if (selectedItem == 4) return;
    else setSelectedItem(selectedItem + 1);
    console.log(`SWIPE_LEFT`);
  }

  function onSwipeRight() {
    if (selectedItem == 0) return;
    else setSelectedItem(selectedItem - 1);
    console.log(` SWIPE_RIGHT`);
  }

  return (
    <ScrollView
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      scrollEnabled="false"
    >
      {props.children}
    </ScrollView>
  );
}
