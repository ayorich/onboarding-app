import { Button, Input, Text } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export function OnboardingFormComponent({ name, onChangeText, onSubmit }) {
  return (
    <>
      <Input
        placeholder="Enter Name"
        style={styles.input}
        value={name}
        onChangeText={onChangeText}
        type="text"
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
