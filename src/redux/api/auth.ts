import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type TRegisterInput = {
  username: string;
  email: string;
  password: string;
};

type TLoginInput = {
  username: string;
  password: string;
};

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/auth`,
  }),

  endpoints: (builder) => ({
    register: builder.mutation<
      IResponse<{ user: IUser; accessToken: string }>,
      TRegisterInput
    >({
      query: (data) => {
        return {
          method: "POST",
          body: data,
          url: "register",
        };
      },

      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          localStorage.setItem("user", JSON.stringify(data.data.user));
          localStorage.setItem("accessToken", JSON.stringify(data.data.accessToken));
        } catch (error) {
          console.log(error);
        }
      },

      transformErrorResponse: (err) => {
        let data: any = {};

        data = err.data;

        return data.message;
      },
    }),

    login: builder.mutation<
      IResponse<{ user: IUser; accessToken: string }>,
      TLoginInput
    >({
      query: (data) => {
        return {
          url: "/login",
          method: "POST",
          body: data,
        };
      },

      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          localStorage.setItem("user", JSON.stringify(data.data.user));
          localStorage.setItem("accessToken", JSON.stringify(data.data.accessToken));
        } catch (error) {
          console.log(error);
        }
      },

      transformErrorResponse: (err) => {
        let data: any = {};

        data = err.data;

        return data.message;
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
export const data = authApi.endpoints.login;
