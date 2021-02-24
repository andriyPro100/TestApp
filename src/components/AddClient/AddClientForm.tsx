import React, {useState} from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import {ModalProps} from "./ModalWrapper";
import request, {gql} from "graphql-request";
import {useQuery, useQueryClient} from "react-query";
import {endpoint} from "../../index"

type Inputs = {
    firstName: string,
    lastName: string,
    phone?: string,
    avatarUrl?: string,
};

function useAddClient(inputs: any) {
    return ( async () => {
        const {data} = await request(
            endpoint, gql
                `mutation {
                    addClient(
                        firstName: "${inputs.firstName}"
                        lastName: "${inputs.lastName}"
                        phone: "${inputs.phone}"
                        avatarUrl: "${inputs.avatarUrl}"
                    ){
                        id
                        firstName
                    }
                }`)
        return data
        }
    )
}

export default function AddClientForm({openModal, setOpenModal}: ModalProps) {
    const { register, handleSubmit, errors } = useForm<Inputs>();
    const [inputs, setInputs] = useState({})
    const { refetch } = useQuery(["addClient", inputs], useAddClient(inputs), {
        refetchOnWindowFocus: false,
        enabled: false
    })
    const client = useQueryClient()
    const onSubmit = (input: React.FormEvent) => {
        setInputs(input)
        setOpenModal(!openModal)
        refetch().then(() => client.invalidateQueries("g"))
    }

    return (
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>

            <span>First name:</span>
            <input className="border-2" name="firstName" ref={register({ required: true })} />

            <span>Last name:</span>
            <input className="border-2" name="lastName" ref={register({ required: true })} />

            <span>Phone:</span>
            <input className="border-2" name="phone" ref={register} />

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
