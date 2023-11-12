import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/home";
import { LoginScreen } from "../screens/login";
import { SignUpScreen } from "../screens/sign-up";
import { MyAlbumScreen } from "../screens/my-album";

const Stack = createNativeStackNavigator();

export function RootRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="MyAlbum" component={MyAlbumScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
