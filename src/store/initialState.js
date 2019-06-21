import { loadStatus } from "constants/loadStatus";
import { LOGIN_STATUS } from "constants/userStatus";

export const initialState = {
  user: {},
  userStatus: LOGIN_STATUS.UNKNOWN,
  items: [],
  perPage: 25,
  currentPage: 0,
  itemsLoadStatus: loadStatus.NONE,
  errors: {},
  filters: { name: "" }
};
