import { Text } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export function ProfileScreenComponent({ profileName }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.text}>
          My name is <Text style={styles.name}>{profileName}</Text>
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 32,
  },
  text: {
    lineHeight: 32,
    textAlign: 'center',
    color: 'black',
    fontSize: 28,
  },
  name: {
    color: 'blue',
    fontWeight: 'bold',
    paddingLeft: 8,
    display: 'inline-block',
  },
});
