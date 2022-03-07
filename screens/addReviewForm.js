import React from "react";
import { View, TextInput, Button, Text } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { globalStyles } from "../styles/global";
import FlatButton from "../styles/flatButton";

// define a review schema for validation using yup
// yup is a package work with formik to provide us a validation rules
// if the validation success then formik onsubmit will pass if it is failed then yup will provide a form errors
// to props object of formik

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    // test function allow us to run a test function on our value, it return true or false.
    .test(
      "is-number-between-1-5",
      "Rating must be a number between 1 and 5",
      (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
      }
    ),
});

const AddReviewForm = ({ addReview }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          addReview(values);
          actions.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
            />
            {/* only if the left value is a valid string, will the right value be displayed */}
            <Text style={globalStyles.errorText}>
              {props.touched.title && props.errors.title}
            </Text>

            <TextInput
              style={globalStyles.input}
              multiline
              placeholder="Review details"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
            />

            {/* only if the left value is a valid string, will the right value be displayed */}
            <Text style={globalStyles.errorText}>
              {props.touched.body && props.errors.body}
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1 - 5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
            />

            {/* only if the left value is a valid string, will the right value be displayed */}
            <Text style={globalStyles.errorText}>
              {props.touched.rating && props.errors.rating}
            </Text>

            <FlatButton text={"Submit"} onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddReviewForm;
