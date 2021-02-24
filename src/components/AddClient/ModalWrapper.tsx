import React, {Dispatch, SetStateAction, useState} from 'react'
import {Transition} from '@headlessui/react'
import AddClientForm from "./AddClientForm";
import request, {gql} from "graphql-request";
import {useQuery} from "react-query";
import {endpoint} from "../Table/TableWrapper";

export interface ModalProps {
    openModal: boolean;
    setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const UPDATE_CLIENT = gql
    `mutation {
        updateClient(
            id: 6
            firstName: "Leonardo"
            lastName: "DiCaprio"
            phone: "+01 989898333"
            avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Leonardo_Dicaprio_Cannes_2019.jpg/330px-Leonardo_Dicaprio_Cannes_2019.jpg"
        ){
            id
            firstName
        }
    }`

const ADD_CLIENT = gql
    `mutation {
        updateClient(
            id: 3
            firstName: "Leonardo"
            lastName: "DiCaprio"
            phone: "+01 989898333"
        ){
            id
            firstName
        }
    }`

function useUpdateClient() {
    console.log("query....add client")
    return ( async () => {
        const data = await request(
            endpoint, UPDATE_CLIENT)
        return data
    })
}

export default function ModalWrapper({openModal, setOpenModal}: ModalProps) {
    const [inputs, setInputs] = useState({})
    const { status, data, error, refetch } = useQuery("updateClient", useUpdateClient, {
        refetchOnWindowFocus: false,
        enabled: false // turned off by default, manual refetch is needed
    })

    console.log(status, "-> updateClients")
    console.log(data)
    return (
        <div className="relative ...">
            <Transition
                show={openModal}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                {(ref) => (

                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div
                            className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                                  aria-hidden="true">&#8203;</span>
                            <div
                                className="p-10 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                                role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                                <AddClientForm openModal={openModal} setOpenModal={setOpenModal}/>
                            </div>
                        </div>
                    </div>

                )}
            </Transition>
        </div>
    )
}
