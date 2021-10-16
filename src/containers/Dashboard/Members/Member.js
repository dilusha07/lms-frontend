import React, {useState, useEffect} from "react";
import {IoReturnUpBack} from "react-icons/io5";
import styled from "styled-components";

import {
    Container,
    ContainerInline,
    FlexRow,
    Button,
} from "../../../components/CommonComponents";

import Spinner from "../../components/Spinner";
import ConfirmationDialog from "../../../components/ConfirmationDialog";

import {getMember, deleteMember, editMember} from "../../api/memberAPI"

const Member = ({id, handleBackClick}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [member, setMember] = useState(null);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [showEditMemberDialog, setshowEditMemberDialog] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getMember(id)
            .then((response) => {
                if(!response.error) {
                    setMember(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
        },[id]);

        const handleDelete = (confirmed) => {
            if (confirmed) {
                deleteMember(member.id);
            }
            setShowDeleteConfirmation(false);
        };

        const handleEdit = (confirmed, data) => {
            if(confirmed){
            
                editMember(member.id, data)
                
            }
            setshowEditMemberDialog(false);
        };
    
    

   return(
       <>
       <Container>
           <Button onClick={handleBackClick} size = {1.5}>
                <IoReturnUpBack />
            </Button>
            {!isLoading && member !== null ? (
                <>    
                        <FlexRow>
                            <ContainerInline>
                                <H1>{member.fname}</H1>
                                <H2>{member.phoneNo}</H2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                               
                            </ContainerInline>
                            
                            </FlexRow>
                            <FlexRow>
                                <>
                                <Button
                            onClick = {() => 
                                setshowEditMemberDialog(true)
                            }
                            >
                            Edit
                        </Button>
                        <Button
                            color="danger"
                            onClick={() =>
                                setShowDeleteConfirmation(true)
                            }
                        >
                            Delete
                        </Button>
                            </>   
                            </FlexRow>
                           </>
                            ):(
                                <Spinner />
                            )}
       </Container>
       <ConfirmationDialog
       handleClose={handleDelete}
       show={showDeleteConfirmation}
       headerText="Confirm deletion"
       detailText="Are you sure you want to delete this member? This action can't be undone."
   />
   <AddMemberDialog
            isEdit = {true}
            show = {showEditMemberDialog}
            handleClose = {handleEdit}
            data = {member}
        />
   </>
   );

};

export default Member;
