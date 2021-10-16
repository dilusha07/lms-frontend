import React, { useState } from "react";
import { IoAddSharp } from "react-icons/io5";

import Table from "../../../components/Table";
import {
    Button,
    Container,
    FluidContainer,
} from "../../../components/CommonComponents";

import { addMember } from "../../../api/memberAPI";
import AddMemberDialog from "./AddMemberDialog";


const Members = ({ members }) => {
    const [selectedMemberId, setSelectedMemberId] = useState(null);
    const [showAddMemberDialog, setShowAddMembersDialog] = useState(false);
    
    const handleTableRowClick = (id) => {
        setSelectedMemberId(id);
    };

    const handleMemberViewBackClick = () => {
        setSelectedMemberId(null);
    };
    
    const handleAddMember = (confirmed, data) => {
        if (confirmed) {
            addMember(data)
        }
        setShowAddMembersDialog(false);
    };

    return setSelectedBookId === null ? (
        <>
            <FluidContainer>
                <Container
                    flexDirection="row"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                >
                    <Button
                        rounded
                        onClick={() => setShowAddMembersDialog(true)}
                    >
                        <IoAddSharp />
                    </Button>
                </Container>
                <Table 
                data={members}
                handleRowClick={handleTableRowClick}
                 />
            </FluidContainer>
            <AddMemberDialog
                show={showAddMemberDialog}
                handleClose={handleAddMember}
            />
            
        </>
         ): (
            <Book id ={setSelectedMemberId} handleBackClick={handleMemberViewBackClick} />
       );
    
};

export default Members;
