import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ipApiTagsMap } from "../constants/apiConstants";

const IP_API = createApi({
    reducerPath: "ipApi",
    baseQuery: fetchBaseQuery({
        baseUrl: ""
    }),
    tagTypes: ipApiTagsMap,
    endpoints: () => ({})
});

export default IP_API;
