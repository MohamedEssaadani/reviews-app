import React, { useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  Modal,
  StyleSheet,
} from "react-native";
import Card from "../styles/card";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";

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

  return (
    <View style={globalStyles.container}>
      {/* add review modal */}
      <Modal visible={openModal} animationType="slide">
        {/* close modal icon */}
        <MaterialIcons
          name="close"
          size={24}
          onPress={() => setOpenModal(false)}
        />

        <View style={styles.modalContent}>
          <Text>Add Modal</Text>
        </View>
      </Modal>

      {/* Show Modal Icon */}
      <MaterialIcons name="add" size={24} onPress={() => setOpenModal(true)} />

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
  modalContent: {},
});
