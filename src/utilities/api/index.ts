import axios from "axios";
import apiConfig from "./api.config";
// import generatedApiConfig from "./serverSchema.json";

const isDevelopment = (process.env.NODE_ENV === "development");
// todo: write a ctf command to add paths
const paths = {
    "graphql": "http://localhost:4000",
    // "host": process.env.CLIENT_HOSTNAME,
    "host": isDevelopment 
        ? "http://localhost:5505" 
        : process.env.CLIENT_HOSTNAME,
    ...apiConfig.paths,
    // ...generatedApiConfig,
};

const client = axios.create({
    // todo: capture CLIENT_HOSTNAME when using the setup script
    // baseURL: (process.env.CLIENT_HOSTNAME + "/api/v1"),
    // baseURL: paths.host,
    baseURL: (paths.host + "/api/v1"),
    // baseURL: "",
    headers: {},
    auth: {
        username: process.env.BASIC_AUTH_USER as string,
        password: process.env.BASIC_AUTH_PASSWORD as string
    }
});

const graphClient = axios.create({
    baseURL: paths.graphql,
    headers: {},
});

// general app queries
const queries = ({
    // General Query to use any query with a passed queryPath
    query: (queryPath: string, payload?: any, method?: string) => ({
        queryKey: [queryPath],
        queryFn: async () => payload 
            ? (await (client as any)[method || "post"](queryPath, payload)).data
            : (await (client as any)[method || "get"](queryPath)).data
    }),
    graphQuery: (queryPath: string, payload?: any, method?: string) => ({
        queryKey: ["graphql", queryPath],
        queryFn: async () => payload 
            ? (await (graphClient as any)[method || "post"](queryPath, payload)).data
            : (await (graphClient as any)[method || "get"](queryPath)).data
    }),
});

export { client, paths, queries };
