import IP_API from "./ipApi";
import { IP_INFO_URL } from "../constants/apiConstants";

const ipInfoApi = IP_API.injectEndpoints({
    endpoints: (build) => ({
        getIp: build.query({
            query: () => IP_INFO_URL
        })
    }),
    overrideExisting: false
});

export const { useGetIpQuery } = ipInfoApi;

export default ipInfoApi;
