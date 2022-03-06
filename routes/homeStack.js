import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import ReviewsDetails from "../screens/reviewsDetails";

// create home stack navigator
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ReviewsDetails" component={ReviewsDetails} />
    </Stack.Navigator>
  );
};

export default HomeStack;
