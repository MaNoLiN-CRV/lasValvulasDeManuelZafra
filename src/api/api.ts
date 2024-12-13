import { createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export interface customResponse {
    name: string,
    lastDate: string,
    values : valve[],
}
export interface valve {
    name: string,
    status: boolean
}

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'manuel zafra api'}),
    endpoints: (builder) => ({
        getItems: builder.query({
            query: () => '/items',
            transformResponse: (response: any) => response as customResponse
        }),
    
    })

})