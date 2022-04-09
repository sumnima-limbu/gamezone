import React, { useState } from "react";
import { useFonts } from "expo-font";
import Navigator from "./routes/homeStack";

export default function App() {
  const [loaded] = useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <Navigator />;
}
