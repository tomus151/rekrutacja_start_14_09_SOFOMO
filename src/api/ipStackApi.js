import { IP_STACK_URL } from "../constants/apiConstants";
import IP_API from "./ipApi";

const ipStackInfoApi = IP_API.injectEndpoints({
    endpoints: (build) => ({
        getIpStack: build.mutation({
            query: (param) => ({
                url: `${IP_STACK_URL}${param}?access_key=ITWgTcpHT8JDcS5MaBqC&format=1`,
                method: "GET"
            })
        })
    }),
    overrideExisting: false
});

export default ipStackInfoApi;
export const { useGetIpStackMutation } = ipStackInfoApi;
