import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {enableScreens} from 'react-native-screens';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
enableScreens(); // Enables native screens for better performance
function MainApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => MainApp);
