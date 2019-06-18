import { loadStatus } from "constants/loadStatus";

export const initialState = {
  user: {},
  items: [],
  perPage: 25,
  currentPage: 0,
  itemsLoadStatus: loadStatus.NONE,
  errors: {},
  filters: { name: "" }
};
