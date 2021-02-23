import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import {ModalProps} from "./Modal";


type Inputs = {
    firstName: string,
    lastName: string,
    phone: string,
    avatarUrl: string,
};

export default function AddClientForm({openModal, setOpenModal}: ModalProps) {
    const { register, handleSubmit, watch, errors } = useForm<Inputs>();
    const onSubmit = (data: React.FormEvent) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">


                <span>First name:</span>
                <input className="border-2" name="firstName" ref={register({ required: true })} />

                <span>Last name:</span>
                <input className="border-2" name="lastName" ref={register({ required: true })} />

                <span>Phone:</span>
                <input className="border-2" name="Phone" ref={register} />

                <span>Image url:</span>
                <input className="border-2" name="avatarUrl" ref={register} />

                <div>
                    {errors.firstName && <span>Field 'First name' is required</span>}
                    {errors.lastName && <span>Field 'Last name' is required</span>}
                </div>

                <div className="flex flex-wrap content-between">
                    <Button type="submit" text="Add" color="bg-blue-500" onClick={() => setOpenModal(!openModal)}/>
                    <Button text="Cancel" color="bg-red-500" onClick={() => setOpenModal(!openModal)}/>
                </div>
            </div>
        </form>
    );
}
