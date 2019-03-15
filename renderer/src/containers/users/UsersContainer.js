import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterUsers } from '../../actions/actions';
import UserList from '../../components/user-list/UserList';
import UserFilter from '../../components/user-filter/UserFilter';

class UsersContainer extends Component {

  render() {
    const { users, filterUsers } = this.props;

    return (
      <div>
        <UserList users={users} />
        <UserFilter filterUsers={filterUsers} />
      </div>
    )
  }
}

const mapStateToProps = state => ({ users: state.users });
const mapDispatchToProps = dispatch => {
  return {
    filterUsers: (conditions) => dispatch(filterUsers(conditions))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);