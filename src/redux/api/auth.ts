import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type TRegisterInput = {
  username: string;
  email: string;
  password: string;
};

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://smarket-bc.onrender.com/api/auth/",
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
    }),

    login : builder.mutation({
        query : (data) => {
            return {
                url : "/login",
                method : "POST",
                body: data,
            }
        }
    })
  }),
});


export const {useRegisterMutation} = authApi