import React, {useState, useEffect} from "react";
import {IoReturnUpBack} from "react-icons/io5";
import styled from "styled-components";


import {getMember} from "../../api/memberAPI"

const Member = ({id, handleBackClick}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [member, setMember] = useState(null);

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

   return(
       <Container>
           <Button onClick={handleBackClick} size = {1.5}>
                <IoReturnUpBack />
            </Button>
            {!isLoading && member !== null ? (
                    
                        <FlexRow>
                            <ContainerInline>
                                <H1>{member.name}</H1>
                                <H2>{member.phoneNo}</H2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                               
                            </ContainerInline>
                            
                            </FlexRow>
                            ):(
                                <Spinner />
                            )}
       </Container>
   );

};

export default Member;
