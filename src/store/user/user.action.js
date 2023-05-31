import { USER_ACTION_TYPES } from "./user.types";
// this should be moved in its own file
export const createAction = (type, payload) => ({ type, payload });

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
