import React, {useState, useEffect} from "react";

import { Button, FlexRow, Select } from "../../../components/CommonComponents";
import { DialogBox, Modal } from "../../../components/Modal";
import Spinner from "../../../components/Spinner";

import {getMembers} from "../../../api/memberAPI";

export default function LendDialog({handleClose, show}){
    const [member, setMember] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [members, setMembers] = useState(null);

    const sendConfirm = () => {
        if(member !== "") {
        handleClose(true, member);
        } else {
            window.alert("Please select a member first.");
        }
    };

    const sendCancel = () => handleClose(false, null);

    useEffect(() => {
        setIsLoading(true);
        const response = getMembers();
        setMembers(response);
        setIsLoading(false);
    }, []);

    return (
        <Modal show ={show}>
            <DialogBox>
                <h2>Lend book</h2>
                <p>Select member to continue and confirm</p>
                <Select
                    id ="member-select"
                    onChange={(e) => setMember(e.target.value)}
                    value = {member}
                >
                    <option value = "">--Please choose an option--</option>
                    {members.map((member, index) => (
                        <option key={index} value={member.id}>
                            {member.name}
                        </option>
                    ))}
                </Select>
                <FlexRow>
                    <Button onClick  = {sendConfirm}>Confirm</Button>
                    <Button onClick  = {sendCancel} color="secondary">
                        Cancel
                    </Button>
                </FlexRow>
            </DialogBox>
        </Modal>
    );
}

    
