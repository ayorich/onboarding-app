import { useState } from 'react';

import { OnboardingFormComponent } from './onboarding-form-component';

export const OnboardingFormContainer = ({ onSubmit, message, ...props }) => {
  const [name, setName] = useState(message);

  return (
    <OnboardingFormComponent
      {...props}
      name={name}
      onChangeText={setName}
      onSubmit={onSubmit}
    />
  );
};
