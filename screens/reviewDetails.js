import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ navigation, route }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{route.params.title}</Text>
      <Text style={globalStyles.titleText}>{route.params.body}</Text>
      <Text style={globalStyles.titleText}>{route.params.rating}</Text>
    </View>
  );
}
