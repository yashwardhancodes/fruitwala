import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const contoctusApi = createApi({
    reducerPath: "contoctusApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `https://fruit-wala-backend.onrender.com/api/v1`,
        credentials: "include"
    }),
    tagTypes: ["Contactus"],
    endpoints: (builder) => {
        return {
            contactus: builder.mutation({
                query: (userData) => {
                    return {
                     

                        url: "/contactus/add",
                        method: "POST",
                        body: userData
                    }
                },
                providesTags: ["Contactus"]
            }),

           

        }
    }
})

export const { useContactusMutation} = contoctusApi
