import React from 'react'
import TableItem from "./TableItem";
import request, {gql} from "graphql-request";
import {useQuery} from "react-query";

export interface TableProps {
    data: any
    setData: any
}

export const endpoint = "https://test-task.expane.pro/api/graphql"

const GET_CLIENT = gql`
    query {
        getClients{
            id
            firstName
            lastName
            phone
            avatarUrl
        }
    }`

function useClients() {
    console.log("query....")
    return useQuery("getClients", async () => {
        const data = await request(
            endpoint, GET_CLIENT)
        return data.getClients;
    })
}

export default function TableWrapper () {

    const { status, data, error, isFetching } = useClients()

    console.log(status, "-> getClients")

    return (
        <div>
            {status === "loading" ? (
                "Loading..."
            ) : status === "error" ? (
                "Error"
            ) : (
                <div className="mx-auto">
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block  sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table className="divide-y divide-gray-200">
                                        <tbody className="bg-white divide-y divide-gray-200">
                                        {data.map((item: any) => <TableItem key={item.id} data={item}/>)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>

    )
}
