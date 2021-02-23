import React from 'react'
import Button from "./Button";

export default function TableItem () {
    return (
        <div>
            <tr className="content-between">
                <td className="">
                    <div className="">

                        <div className="ml-6">
                            <div className="text-sm font-medium text-gray-900">
                                Jane Cooper
                            </div>
                            <div className="text-sm text-gray-500">
                                jane.cooper@example.com
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
