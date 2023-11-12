import { StatusBar } from "expo-status-bar";
import { RootRoute } from "./src/routes/root.routes";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ paddingTop: 50, flex: 1 }}>
      <Provider store={store}>
        <StatusBar style="auto" />
        <RootRoute />
      </Provider>
    </View>
  );
}
