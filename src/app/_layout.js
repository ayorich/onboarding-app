import { Stack } from 'expo-router';
import { ThemeProvider } from '@rneui/themed';

import { darkTheme } from '../features/styles/themes';
import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { darkColors } from '../features/styles/colors';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={darkTheme}>
          {/* <StatusBar style="light" /> */}
          <Stack>
            <Stack.Screen
              name="index"
              options={{
                title: 'Onboarding',
              }}
            />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
