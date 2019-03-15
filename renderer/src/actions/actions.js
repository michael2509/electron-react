import { GET_USERS, GET_SINGLE_USER } from './actionTypes';

export const getUserById = (user) => {
  return {
    type: GET_SINGLE_USER,
    user: user
  }
}

export const findUserById = (id) => (dispatch) => {
  const users = window.ipcRenderer.sendSync('get-users');
  const singleUser = users.filter(user => user.id === id);
  dispatch(getUserById(singleUser[0]));
}

export const getUsers = (users) => {
  return {
    type: GET_USERS,
    users: users
  }
}

export const fetchUsers = () => (dispatch) => {
  const users = window.ipcRenderer.sendSync('get-users');
  dispatch(getUsers(users));
}

export const filterUsers = (conditions) => {
  return (dispatch) => {
    const users = window.ipcRenderer.sendSync('get-users');

    const usersFiltered = users.filter(user => {
      if(conditions.country === "All") {
        return (
          user.followers.count > conditions.followers_range.min_value &&
          user.followers.count < conditions.followers_range.max_value &&
          user.comments > conditions.comments_range.min_value &&
          user.comments < conditions.comments_range.max_value 
        )
      }
      else {
        return (
          (user.followers.count > conditions.followers_range.min_value) &&
          (user.followers.count < conditions.followers_range.max_value) &&
          (user.comments > conditions.comments_range.min_value) &&
          (user.comments < conditions.comments_range.max_value) &&
          (user.country === conditions.country || user.location === conditions.country)
        )
      }
    })

    usersFiltered.sort((a, b) => b.followers.count - a.followers.count);

    dispatch(getUsers(usersFiltered));
  }
}