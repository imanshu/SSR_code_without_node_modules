
import axios from 'axios';
export const FETCH_USERS = 'fetch_users';

/*export const fetchUsers = () =>  async(dispatch, getState, api) => {
  const res = await api.get('/users');
  console.log(res);
  //const res=[{"id":1,"name":"Leanne Graham"},{"id":2,"name":"Ervin Howell"},{"id":3,"name":"Clementine Bauch"},{"id":4,"name":"Patricia Lebsack"},{"id":5,"name":"Chelsey Dietrich"}];
  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};*/

export function fetchUsers(){
  return function(dispatch){
    
    return axios.get(`https://react-ssr-api.herokuapp.com/users`)
        .then(res=>{
          console.log(res);
          dispatch({
    type: FETCH_USERS,
    payload: res
  });
        })
        .catch(error=>{
          throw(error);
        })
  };
}

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user');

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  });
};

export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get('/admins');

  dispatch({
    type: FETCH_ADMINS,
    payload: res
  });
};
