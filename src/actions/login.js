import { LOGIN } from '../constants/actionTypes'
export const login = user => ({
  type: LOGIN,
  payload: user
});

export default {
  login
}