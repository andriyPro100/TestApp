import React, {useState} from 'react';
import ModalWrapper from "./ModalWrapper";
import Button from "../Button";


const AddClientWrapper = () => {
    const [openModal, setOpenModal] = useState(false)

    return (
            <div>
                <ModalWrapper openModal={openModal} setOpenModal={setOpenModal}/>
                <Button text="Add client" color="bg-blue-500" onClick={() => setOpenModal(!openModal)}/>
            </div>
    )
}

export default AddClientWrapper;
