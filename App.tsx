import React from 'react';
import {store, persistor} from './src/controller/store/store';
import Router from './src/router/Router';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {PersistGate} from 'redux-persist/integration/react';
import colors from './src/constants/colors';
//////////////////////////////
export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.Pink400,
      secondary: colors.Pink900,
      accent: colors.IndigoA700,
    },
  };
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider theme={theme}>
          <SafeAreaProvider>
            <Router />
          </SafeAreaProvider>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
