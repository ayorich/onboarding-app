import { Stack } from 'expo-router';

export const withHeader = (options) => (Component) => (props) =>
  (
    <>
      <Stack.Screen
        options={{
          headerTintColor: '#fff',
          ...options,
        }}
      />
      <Component {...props} />
    </>
  );
