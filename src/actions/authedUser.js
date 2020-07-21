// Action type
export const SET_AUTHED_USER = 'SET_AUTHED_USER';

// Action creator
export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}
