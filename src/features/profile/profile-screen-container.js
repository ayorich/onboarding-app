import { compose } from '@reduxjs/toolkit';
import { connect } from 'react-redux';

import { selectUserName } from '../profile/profile-reducer';
import { ProfileScreenComponent } from './profile-screen-component';

const mapStateToProps = (state) => ({
  profileName: selectUserName(state),
});

export const ProfileScreenContainer = compose(connect(mapStateToProps))(
  ProfileScreenComponent
);
