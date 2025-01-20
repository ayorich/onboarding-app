import { useState } from 'react';

import { OnboardingFormComponent } from './onboarding-form-component';

export const OnboardingFormContainer = ({
  onSubmit,
  profileName,
  ...props
}) => {
  const [name, setName] = useState(profileName);

  return (
    <OnboardingFormComponent
      {...props}
      name={name}
      onChangeText={setName}
      onSubmit={onSubmit}
    />
  );
};
