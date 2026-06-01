import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: {
    requests: [],
    selectedRequest: null,
    loading: false,
  },
  reducers: {
    setRequests(state, action) {
      state.requests = action.payload;
    },

    setSelectedRequest(state, action) {
      state.selectedRequest = action.payload;
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },
    deleteRequestFromStore: (state, action) => {
      state.requests = state.requests.filter(
        (request) => request.id !== action.payload
      );
    },

  },
});

export const {
  setRequests,
  setSelectedRequest,
  deleteRequestFromStore,
  setLoading,
} = requestSlice.actions;

export default requestSlice.reducer;