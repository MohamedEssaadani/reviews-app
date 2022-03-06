import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/about";

// create about stack navigator
const Stack = createNativeStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator initialRouteName="About">
      <Stack.Screen
        options={{
          title: "About",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        name="About"
        component={About}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
