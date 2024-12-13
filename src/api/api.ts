import { createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export interface group {
    name: string,
    lastDate: string,
    values : valve[],
}
export interface valve {
    name: string,
    state: boolean
}

 export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://192.168.1.34:3000'}),
    tagTypes: ['Group'],
    endpoints: (builder) => ({
        getItems: builder.query({
            query: () => '/items',
            transformResponse: transformResponseCustom,
            providesTags: ['Group'],
        }),
        refreshItems: builder.mutation({   
            query: (newItems: group[]) => ({
                url: '/items',
                method: 'POST',
                body: newItems,
            }),
            transformResponse: transformResponseCustom,

        })
    })

})

const transformResponseCustom = (response: any) => response as group[];

export const { useGetItemsQuery, useRefreshItemsMutation } = api