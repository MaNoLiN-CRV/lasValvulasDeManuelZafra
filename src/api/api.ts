import { createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export interface group {
    name: string,
    lastDate: string,
    values : valve[],
}
export interface valve {
    name: string,
    status: boolean
}

 export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'manuel zafra api'}),
    endpoints: (builder) => ({
        getItems: builder.query({
            query: () => '/items',
            transformResponse: transformResponseCustom,
            
        }),
        refreshItems: builder.mutation({   
            query: (newItem: group) => ({
                url: '/items',
                method: 'POST',
                body: newItem,
            
            }),
            transformResponse: transformResponseCustom,

        })
    })

})

const transformResponseCustom = (response: any) => response as group[];

export const { useGetItemsQuery, useRefreshItemsMutation } = api