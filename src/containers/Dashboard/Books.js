import React from "react";

import Table from "../../components/Table";
import { FluidContainer } from "../../components/CommonComponents";

const Books = ({catalog}) => {
    const updatedCatalog = [
        ...catalog,
        {
            author: "Dilusha",
            burrowedData: "",
            burrowedMemberId: "",
            id: "3",
            isAvailable: true,
            title: "Harry Potter",
        },
        {
            author: "Dilusha",
            burrowedData: "",
            burrowedMemberId: "",
            id: "3",
            isAvailable: true,
            title: "Harry Potter",
        },
    ];

    const handleTableRowClick = (id) => {
        console.log(id);
    }
    return (
        <FluidContainer>       
            {<Table 
            data = {updatedCatalog} 
            handleRowClick={handleTableRowClick}
            instruction= "Click row to view book"
            />}
        </FluidContainer>
    );
};

export default Books;