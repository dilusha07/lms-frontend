import React, { useState } from "react";

import {
    Button,
    Container,
    FlexRow,
} from "../../../components/CommonComponents";
import { Modal, DialogBox } from "../../../components/Modal";

import Input from "../../../components/Input";

export default function AddMemberDialog({ handleClose, show }) {
    const [nic, setNIC] = useState("");
    const [fname, setFirstName] = useState("");
    const [lname, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [userType, setUserType] = useState("");


    const clearInputs = () => {
        setNIC("");
        setFirstName("");
        setLastName("");
        setPhone("");
        setUserType("");

    };
    const sendDone = () => {
        if (nic !== "" && fname !== "" && lname !== "" && phone !== "" && address !== "" && userType !== "" ) {
            const data = { nic,fname,lname, phoneNo: phone,userType };
            clearInputs();
            handleClose(true, data);
        } else if (nic === "") {
            window.alert("Please enter member first name to add.");
        }else if (fname === "") {
            window.alert("Please enter member last name to add.");
        } else if (lname === "") {
            window.alert("Please enter member contact number to add.");
        }else if (address === "") {
            window.alert("Please enter member address to add.");
        }else {
            window.alert("Please enter the user type to add.");
        }
    };

    const sendCancel = () => {
        clearInputs();
        handleClose(false, null);
    };

    return (
        <Modal show={show}>
            <DialogBox>
                <h2>Add member</h2>
                <p>Enter the below details of the member</p>
                <Container alignItems="center" disableFullWidth>
                <Input
                        label="NIC"
                        value={nic}
                        onChange={(e) => setNIC(e.target.value)}
                        type="text"
                        id="nic"
                        name="nic"
                        required
                        minLength="1"
                    />
                    <Input
                        label="First Name"
                        value={fname}
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        id="fname"
                        name="fname"
                        required
                        minLength="1"
                    />
                    <Input
                        label="Last Name"
                        value={lname}
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        id="lname"
                        name="lname"
                        required
                        minLength="1"
                    />
                    <Input
                        label="Contact Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="text"
                        id="phone"
                        name="phone"
                        required
                        minLength="1"
                    />
                    <Input
                        label="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        id="address"
                        name="address"
                        required
                        minLength="1"
                    />
                    <select 
                        label = "User Type"
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                        id = "userType"
                        required>    
                        <option value="school">School</option>
                        <option value="university">University</option>
                        <option value="employed">Employed</option>
                    </select>
                </Container>

                <FlexRow>
                    <Button onClick={sendDone}>Done</Button>
                    <Button onClick={sendCancel} color="secondary">
                        Cancel
                    </Button>
                </FlexRow>
            </DialogBox>
        </Modal>
    );
}
