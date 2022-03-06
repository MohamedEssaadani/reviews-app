import "react-native-gesture-handler";
import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./routes/drawer";

// load fonts
const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

export default function App() {
  // to check if the fonts is loaded or not
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // render the Screens only if the fonts are loaded
  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={() => getFonts()}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
