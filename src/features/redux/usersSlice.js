import {
  CreateSliceOptions,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice/apiSlice";

const usersAdapter = createEntityAdapter({
  selectId: (user) => user.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const initialState = usersAdapter.getInitialState({
  selectedUser: {},
});

const localUsersSlice = createSlice({
  name: "localUsers",
  initialState,
  reducers: {
    selectUser: usersAdapter.addOne(),
  },
});

const usersSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      transformResponse: (response) => {
        usersAdapter.setAll(initialState, response);
      },
      transformErrorResponse: (response) => response.error,
      providesTags: ["Users"],
    }),
  }),
});
