import React, {useState} from 'react';
import Button from "./Button";

function App() {
    const [openModal, setOpenModal] = useState(false)
    return (
        <div className="container mx-auto my-10">
            <h1>Modal window</h1>
            <Button text="Add client" color="bg-blue-500"/>
            <h1>Table</h1>
        </div>
    );
}

export default App;
