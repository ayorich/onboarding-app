import { compose } from '@reduxjs/toolkit';
import { connect } from 'react-redux';

import { getUserName } from '../profile/profile-reducer';
import { ProfileScreenComponent } from './profile-screen-component';

const mapStateToProps = (state) => ({
  profileName: getUserName(state),
});

export const ProfileScreenContainer = compose(connect(mapStateToProps))(
  ProfileScreenComponent
);
