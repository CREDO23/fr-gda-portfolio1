import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getTokenFromLocalStorage } from "@/helpers/getToken";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/users/`,
  }),

  endpoints: (builder) => ({
    getUser: builder.query<IResponse<IUser>, string>({
      query: (id) => {
        return {
          method: "GET",
          url: `/${id}`,
          headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
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


export const {useGetUserQuery } = authApi;