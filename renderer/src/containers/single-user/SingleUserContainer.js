import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findUserById } from '../../actions/actions';
import SingleUser from '../../components/single-user/SingleUser';

class SingleUserContainer extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.findUserById(id);
    this.setState({ loading: false })
  }

  render() {
    const user = this.props.single_user;
    const { loading } = this.state;

    return (
      <div>
        <SingleUser loading={loading} user={user} />
      </div>
    )
  }
}

const mapStateToProps = state => ({ single_user: state.single_user });
const mapDispatchToProps = dispatch => {
  return {
    findUserById: (id) => dispatch(findUserById(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleUserContainer);


