// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app terasdasd</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import { Provider } from "react-redux";

import Routes from "./src/routes/Routes";
// import { store } from "./src/states/store";

export default function App() {
  console.reportErrorsAsExceptions = false;
  return (
    // <Provider store={store}>
      <Routes />
    // </Provider>
  );
}
