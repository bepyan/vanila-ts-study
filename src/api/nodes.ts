import { Node } from "@types";
import baseFetch from "./baseFetch.js"

export const getRootNodes = async (): Promise<Node[]> => {
    return await baseFetch({ url: `/`, method: "GET" });
}

type getNodeFetch = (nodeId: string) => Promise<Node[]>
export const getNodes: getNodeFetch = async (nodeId) => {
    return await baseFetch({ url: `/${nodeId}`, method: "GET" });
}