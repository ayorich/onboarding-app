import { Button, Input } from '@rneui/themed';
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export function OnboardingFormComponent({ name, onChangeText, onSubmit }) {
  return (
    <>
      <Input
        placeholder="Enter Name"
        style={styles.input}
        value={name}
        onChangeText={onChangeText}
      />
      <Button size="lg" onPress={() => onSubmit(name.trim())}>
        Submit Name
      </Button>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  input: {
    fontSize: 22,
  },
});
