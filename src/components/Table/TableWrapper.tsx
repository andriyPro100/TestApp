import React from 'react'
import TableItem from "./TableItem";
import request, {gql} from "graphql-request";
import {useQuery} from "react-query";
import {endpoint} from "../../index";


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
    return useQuery("g", async () => {
        const data = await request(
            endpoint, GET_CLIENT)
        return data.getClients;
    })
}

export default function TableWrapper () {

    const { status, data} = useClients()

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
