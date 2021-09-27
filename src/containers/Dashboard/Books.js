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
    ];
    return (
        <FluidContainer>
            
            {<Table data = {updatedCatalog} />}
        </FluidContainer>
    );
};

export default Books;