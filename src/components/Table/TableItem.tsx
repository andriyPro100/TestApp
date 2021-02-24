import React, {useState} from 'react'
import Button from "../Button";
import no_ava from "../../img/person-icon.png"
import UpdateModalWrapper from "./UpdateModalWrapper";

export default function TableItem ({data}:any) {
    const [openModal, setOpenModal] = useState(false)
    return (
        <tr className="content-between">
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" alt={data.lastName}
                             src={data.avatarUrl ?  data.avatarUrl : no_ava }/>
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
                <UpdateModalWrapper values={data} openModal={openModal} setOpenModal={setOpenModal}/>
                <Button text="edit" color="bg-green-500" onClick={() => setOpenModal(!openModal)}/>
            </td>
        </tr>
    )
}
