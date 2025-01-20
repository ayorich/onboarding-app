import { compose } from '@reduxjs/toolkit';
import { connect } from 'react-redux';

import { withHeader } from '../navigation/with-header';

import { OnboardingScreenComponent } from './onboarding-screen-component';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export const OnboardingScreenContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(OnboardingScreenComponent);
