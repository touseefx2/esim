// import {AppRegistry} from 'react-native';
// import App from './src/App';
// import {name as appName} from './app.json';
// import {enableScreens} from 'react-native-screens';
// import {store} from './src/redux/store';
// import {Provider} from 'react-redux';
// enableScreens(); // Enables native screens for better performance
// function MainApp() {
//   return (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// }

// AppRegistry.registerComponent(appName, () => MainApp);

import React from "react";
import { AppRegistry, Text } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";
import { enableScreens } from "react-native-screens";
import { store, persistor } from "./src/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate

enableScreens(); // Enables native screens for better performance

function MainApp() {
  return (
    <Provider store={store}>
      {/* PersistGate waits until the persisted state is loaded */}
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}

// Loading screen component while data is being loaded
function LoadingScreen() {
  console.log("LoadingScreen: ");
  return (
    <React.Fragment>
      {/* You can show a custom loading screen here */}
      <Text
        style={{
          color: "black",
          fontSize: 40,
          alignSelf: "center",
          marginTop: "40%",
        }}
      >
        Loading...
      </Text>
    </React.Fragment>
  );
}

AppRegistry.registerComponent(appName, () => MainApp);
