import React from 'react';
import TableWrapper from "./Table/TableWrapper";
import AddClientWrapper from "./AddClient/AddClientWrapper";



const App: React.FC = () => {

    return (
        <div>
            <div className="container mx-auto my-10">
                <AddClientWrapper/>
                <TableWrapper />
            </div>
        </div>
    )
}

export default App;
