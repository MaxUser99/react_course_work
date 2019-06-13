import { loadStatus } from "constants/loadStatus";

export const initialState = {
  items: [],
  images: [],
  itemsLoadStatus: loadStatus.NONE,
  errors: {},
  filters: {}
};
