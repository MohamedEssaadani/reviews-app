import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontFamily: "nunito-bold",
    fontSize: 20,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderColor: "#ddd",
    fontSize: 18,
    borderRadius: 6,
    margin: 5,
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginTop: 6,
    marginBottom: 10,
    textAlign: "center",
  },
});

export const images = {
  ratings: {
    1: require("../assets/rating-1.png"),
    2: require("../assets/rating-2.png"),
    3: require("../assets/rating-3.png"),
    4: require("../assets/rating-4.png"),
    5: require("../assets/rating-5.png"),
  },
};
