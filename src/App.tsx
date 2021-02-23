import React, {useState} from 'react';
import TableWrapper from "./TableWrapper";
import Modal from "./Modal";
import Button from "./Button";

import {
    QueryClient,
    QueryClientProvider,
} from "react-query";


const queryClient = new QueryClient();


const App: React.FC = () => {
    const [openModal, setOpenModal] = useState(false)
    const [postId, setPostId] = useState(2)

    return (
        <QueryClientProvider client={queryClient}>
            <div className="container mx-auto my-10">
                <Modal openModal={openModal} setOpenModal={setOpenModal}/>
                <Button text="Add client" color="bg-blue-500" onClick={() => setOpenModal(!openModal)}/>
                <TableWrapper postId={postId} setPostId={setPostId}/>
            </div>
        </QueryClientProvider>

    );
}

export default App;
