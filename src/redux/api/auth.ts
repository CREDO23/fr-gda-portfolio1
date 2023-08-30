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
    register: builder.mutation<IResponse<IUser>, TRegisterInput>({
      query: (data) => {
        return {
          method: "POST",
          body: data,
          url: "register",
        };
      },

      transformErrorResponse: (err) => {
        let data: any = {};

        data = err.data;

        return data.message;
      },
    }),

    login: builder.mutation<IResponse<IUser>, TLoginInput>({
      query: (data) => {
        return {
          url: "/login",
          method: "POST",
          body: data,
        };
      },

      transformErrorResponse: (err) => {
        let data: any = {};

        data = err.data;

        return data.message;
      },
    }),
  }),
});


export const { useRegisterMutation, useLoginMutation ,  } = authApi;
export const data= authApi.endpoints.login


