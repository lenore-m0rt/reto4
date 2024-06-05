export const addUser = (userData) => {
    return {
      type: 'ADD_USER',
      payload: userData,
    };
  };

export const setData = (data) => {
  return {
    type: 'SET_DATA',
    payload: data,
  };
};