import { Button, Input } from '@rneui/themed';
import { StyleSheet } from 'react-native';

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
        {name ? 'Update' : 'Submit Name'}
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
