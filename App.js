import { StatusBar } from "expo-status-bar";
import { RootRoute } from "./src/routes";
import { store } from "./app/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <RootRoute />
    </Provider>
  );
}
