import React, {Dispatch, SetStateAction} from 'react'
import TableItem from "./TableItem";

import {
    useQuery,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from "react-query";
import { request, gql } from "graphql-request";

const endpoint = "https://test-task.expane.pro/api/graphql"
export interface TableProps {
    postId: number
    setPostId: Dispatch<SetStateAction<number>>
}

function usePosts() {
    return useQuery("getClients", async () => {
        const data = await request(
            endpoint,
            gql`
            query {
             getClients{
                id
                firstName
                lastName
                phone
                avatarUrl
              }
            }
      `
        );
        console.log(data)
        return data
    });
}

interface Client {
    id: string
    firstName: string
    lastName: string
    phone?: string
    avatarUrl?: string
}

export default function TableWrapper ({postId, setPostId}: TableProps) {
    const { status, data, isFetching, error } = usePosts()
    console.log(data)
    return (
        <div className="mx-auto">
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block  sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200">
                                {postId < 1 ? (
                                    <span className="m-4">No clients in clients list</span>
                                ): (
                                    <TableItem/>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
