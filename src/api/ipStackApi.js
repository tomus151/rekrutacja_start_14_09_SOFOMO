import { IP_STACK_URL } from "../constants/apiConstants";
import IP_API from "./ipApi";

const ipStackInfoApi = IP_API.injectEndpoints({
    endpoints: (build) => ({
        getIpStack: build.mutation({
            query: (param) => ({
                url: `${IP_STACK_URL}${param}?access_key=8b7c1bdd45132e06cd85a8d478a69c0c&format=1`,
                method: "GET"
            })
        })
    }),
    overrideExisting: false
});

export default ipStackInfoApi;
export const { useGetIpStackMutation } = ipStackInfoApi;
