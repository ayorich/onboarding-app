import { compose } from '@reduxjs/toolkit';
import { connect } from 'react-redux';

import { selectUserName, userUpdated } from '../profile/profile-reducer';
import { OnboardingScreenComponent } from './onboarding-screen-component';
const mapStateToProps = (state) => ({
  profileName: selectUserName(state),
});

const mapDispatchToProps = {
  userUpdated: userUpdated,
};

export const OnboardingScreenContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(OnboardingScreenComponent);
