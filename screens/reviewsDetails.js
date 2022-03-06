import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Card from "../styles/card";
import { globalStyles, images } from "../styles/global";

export default function ReviewsDetails({ route }) {
  const rating = route.params.rating;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.title}>{route.params.title}</Text>
        <Text style={globalStyles.title}>{route.params.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
