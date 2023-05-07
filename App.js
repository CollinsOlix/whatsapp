import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import { SectionContext } from "./Context";
import { useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const [selectedItem, setSelectedItem] = useState(1);
  return (
    <SectionContext.Provider
      value={{ indexValue: [selectedItem, setSelectedItem] }}
    >
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="HomeScreen"
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SectionContext.Provider>
  );
}
