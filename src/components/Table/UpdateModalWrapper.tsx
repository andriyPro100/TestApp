import React, {Dispatch, SetStateAction} from 'react'
import {Transition} from '@headlessui/react'
import UpdateClientForm from "./UpdateClientForm";


export interface ModalProps {
    values: any
    openModal: boolean;
    setOpenModal: Dispatch<SetStateAction<boolean>>;
}


export default function UpdateModalWrapper({values, openModal, setOpenModal}: ModalProps) {

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
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div
                        className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75">

                            </div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                              aria-hidden="true">&#8203;</span>
                        <div
                            className="p-10 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                            role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                            <UpdateClientForm values={values} openModal={openModal} setOpenModal={setOpenModal}/>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    )
}
