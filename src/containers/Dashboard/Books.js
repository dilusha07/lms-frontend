import React, {useState} from "react";

import Table from "../../components/Table";
import { FluidContainer } from "../../components/CommonComponents";
import Book from "./Book";

const Books = ({catalog}) => {
    const [selectedBookId, setSelectedBookId] = useState(null);
       
    const handleTableRowClick = (id) => {
        setSelectedBookId(id);
    };

    const handleBookViewBackClick = () => {
        setSelectedBookId(null);
    };
    return setSelectedBookId === null ? (
        <FluidContainer>       
            <Table 
            data = {catalog} 
            handleRowClick={handleTableRowClick}
            instruction= "Click row to view book"
            />
        </FluidContainer>
    ): (
         <Book id ={setSelectedBookId} handleBackClick={handleBookViewBackClick} />
    );
};

export default Books;