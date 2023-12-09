import { createReducer } from "@reduxjs/toolkit";

// Reducer for handling data fetching
export const Fetch_Data_Reducer = createReducer(
  {}, // Initial state
  (builder) => {
    builder
      .addCase('FETCH_DATA', (state, action) => {
        // Update state with fetched data on successful data fetch
        state.Tickets = action.payload.tickets;
        state.User = action.payload.users;
      })
      .addCase('FAILED_FETCH', (state) => {
        // Update state when data fetch fails
        state.Tickets = [];
        state.User = [];
      });
  }
);

// Reducer for handling selected and organized data
export const Select_Data_Reducer = createReducer(
  {}, // Initial state
  (builder) => {
    builder
      .addCase('DATA_SUCCESS', (state, action) => {
        // Update state with selected and organized data on success
        state.loading = false;
        state.selectedData = action.payload.selectedData;
        state.user = action.payload.user;
      })
      .addCase('DATA_FAILURE', (state, action) => {
        // Update state when selecting data fails
        state.selectedData = [];
        state.message = action.payload.message;
      });
  }
);
