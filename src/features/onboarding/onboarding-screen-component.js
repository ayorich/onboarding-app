import { router } from 'expo-router';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { OnboardingFormContainer } from './onboarding-form-container';
export function OnboardingScreenComponent({ userUpdated, profileName }) {
  const onSubmit = (name) => {
    userUpdated({ name });
    router.navigate('profile');
  };

  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={72}
        style={styles.container}
      >
        <SafeAreaView style={styles.safeArea}>
          <OnboardingFormContainer
            onSubmit={onSubmit}
            profileName={profileName}
          />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  text: {
    lineHeight: 32,
    textAlign: 'center',
  },

  input: {
    fontSize: 22,
  },
});
