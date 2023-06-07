import { StatusBar } from 'expo-status-bar';
import { Provider } from "react-redux";

import Routes from "./src/routes/Routes";
import { store } from "./src/states/store";

export default function App() {
  console.reportErrorsAsExceptions = false;
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <Routes />
    </Provider>
  );
}
