import React, { useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Card from "../styles/card";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import AddReviewForm from "./addReviewForm";

export default function Home({ navigation }) {
  // toggle modal
  const [openModal, setOpenModal] = useState(false);

  // reviews list
  const [reviews, setReviews] = useState([
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },

    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  // add review
  const addReview = (review) => {
    // set review key
    review.key = Math.random().toString();
    // add review to the review array
    setReviews((currentReviews) => [review, ...currentReviews]);
    // close the modal
    setOpenModal(false);
  };

  return (
    <View style={globalStyles.container}>
      {/* add review modal */}
      <Modal visible={openModal} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            {/* close modal icon */}
            <MaterialIcons
              name="close"
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setOpenModal(false)}
            />
            <AddReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Show Modal Icon */}
      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setOpenModal(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewsDetails", item)}
          >
            <Card>
              <Text style={globalStyles.title}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  modalToggle: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
});
