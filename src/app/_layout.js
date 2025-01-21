import { ThemeProvider } from '@rneui/themed';
import { Stack } from 'expo-router';

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { darkTheme } from '../features/styles/themes';
import { persistor, store } from '../redux/store';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={darkTheme}>
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
