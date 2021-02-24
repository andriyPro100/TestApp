import React from 'react';
import TableWrapper from "./Table/TableWrapper";
import AddNewClient from "./AddClient/AddNewClient";


const App: React.FC = () => {

    return (
        <div>
            <div className="container mx-auto my-10">
                <AddNewClient/>
                <TableWrapper />
            </div>
        </div>
    )
}

export default App;
