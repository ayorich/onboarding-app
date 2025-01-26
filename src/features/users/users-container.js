import { compose } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { useEffectOnce } from './use-effect-once';
import { UsersScreenComponent } from './users-component';
import { selectUsers, selectFetchingUsers } from './users-reducer';
import { loadUsers } from './users-saga';

const mapStateToProps = state => ({
  users: selectUsers(state),
  loading: selectFetchingUsers(state),
});

const mapDispatchToProps = {
  loadUsers,
};

function UsersScreenContainer({ loadUsers, ...props }) {
  useEffectOnce(() => {
    loadUsers();
  });

  return <UsersScreenComponent {...props} loadUsers={loadUsers} />;
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  UsersScreenContainer,
);
