import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function ReviewsDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Reviews Details Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 18,
  },
});
