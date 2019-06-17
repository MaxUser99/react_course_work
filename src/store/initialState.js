import { loadStatus } from "constants/loadStatus";

export const initialState = {
  items: [],
  perPage: 25,
  currentPage: 0,
  images: [],
  itemsLoadStatus: loadStatus.NONE,
  errors: {},
  filters: {}
};
