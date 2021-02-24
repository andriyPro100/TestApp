import React from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import {ModalProps} from "./ModalWrapper";


type Inputs = {
    firstName: string,
    lastName: string,
    phone?: string,
    avatarUrl?: string,
};



export default function AddClientForm({openModal, setOpenModal}: ModalProps) {
    const { register, handleSubmit, watch, errors } = useForm<Inputs>();

    const onSubmit = (input: React.FormEvent) => {
        console.log(input)
        setOpenModal(!openModal)
    }

    return (
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>

            <span>First name:</span>
            <input className="border-2" name="firstName" ref={(e) => register({ required: true })} />

            <span>Last name:</span>
            <input className="border-2" name="lastName" ref={(e) =>register({ required: true })} />

            <span>Phone:</span>
            <input className="border-2" name="Phone" ref={(e) =>register} />

            <span>Image url:</span>
            <input className="border-2" name="avatarUrl" ref={register} />

            {errors.firstName && <span>Field 'First name' is required</span>}
            {errors.lastName && <span>Field 'Last name' is required</span>}


            <div className="flex flex-wrap content-between">
                <Button type="submit" text="Add" color="bg-blue-500"/>
                <Button type="button" text="Cancel" color="bg-red-500" onClick={() => setOpenModal(!openModal)}/>
            </div>
        </form>
    );
}
