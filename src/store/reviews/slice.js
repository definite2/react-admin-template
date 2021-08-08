import { createSlice } from "@reduxjs/toolkit";
//data tables always include filtering! I initialize this slice for this.
//...put your filter params to initialFilters.
//...if you have server pagination add pagination related filter params(offset,limit,page)
//...if you have sorting in your backend add sorting related params to filters as well(sortBy, sortDirection )
export const initialFiters = {
  startDate: null,
  endDate: null,
  email: "",
  name: "",
  status: "handled",
  page: 1,
  limit: 10,
  sortBy: "date",
  sortDirection: "ascending",
};
const initialState = {
  listLoading: false,
  actionsLoading: false,
  totalElements: 0,
  lastError: null,
  data: [],
  filters: initialFiters,
};
export const callTypes = {
  list: "list",
  action: "action",
};
//always handle loading error states for each reducers! Thus you can easily manage you UI component states as well
//...(i.e. if error show a snackbar etc.)
export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: initialState,
  reducers: {
    catchError: (state, action) => {
      state.lastError = `${action.type}:${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },
    startCall: (state, action) => {
      state.lastError = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },
    reviewsFetched: (state, action) => {
      const { data, totalElements } = action.payload;
      state.data = data;
      state.totalElements = totalElements;
      state.listLoading = false;
      state.lastError = null;
    },
    setFilters: (state, action) => {
      state.actionsLoading = false;
      state.lastError = null;
      state.filters = action.payload;
    },
    resetFilters: (state) => {
      state.actionsLoading = false;
      state.lastError = null;
      state.filters = initialFiters;
    },
    setSort: (state, action) => {
      state.actionsLoading = false;
      state.lastError = null;
      const { sortBy, sortDirection } = action.payload;
      state.filters.sortBy = sortBy;
      state.filters.sortDirection = sortDirection;
    },
  },
});
