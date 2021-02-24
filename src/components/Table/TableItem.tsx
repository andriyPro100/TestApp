import React from 'react'
import Button from "../Button";
import no_ava from "../../img/person-icon.png"

export default function TableItem ({data}:any) {
    debugger
    return (
        <tr className="content-between">
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full"
                             src={data.avatarUrl ?  data.avatarUrl : no_ava }
                             alt="image"/>
                    </div>
                    <div className="ml-6">
                        <div className="text-sm font-medium text-gray-900">
                            {data.firstName} {data.lastName}
                        </div>
                        <div className="text-sm text-gray-500">
                            {data.phone}
                        </div>
                    </div>
                </div>
            </td>
            <td className="pl-40 pr-10">
                <Button text="edit" color="bg-green-500"/>
            </td>

        </tr>
    )
}
