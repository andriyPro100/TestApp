import React from 'react'
import Button from "../Button";

export default function TableItem ({data}:any) {
    return (
        <div>
            <tr className="content-between">
                <td className="">
                    <div className="">

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
                <td className="pl-40">
                    <Button text="edit" color="bg-green-500"/>
                </td>
                <td className="pl-25">
                    <Button text="remove" color="bg-red-500"/>
                </td>
            </tr>
        </div>
    )
}
