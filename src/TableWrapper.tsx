import React, {Dispatch, SetStateAction} from 'react'


export interface TableProps {
    postId: number
    setPostId: Dispatch<SetStateAction<number>>
}


interface Client {
    id: string
    firstName: string
    lastName: string
    phone?: string
    avatarUrl?: string
}

export default function TableWrapper({postId, setPostId}: TableProps) {
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
                                ) : (
                                    <h1>Table item</h1>
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
