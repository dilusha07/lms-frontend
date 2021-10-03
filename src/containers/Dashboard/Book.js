import React, {useState, useEffect} from "react";
import {IoReturnUpBack} from "react-icons/io5";
import styled from "styled-components";

import { getBook } from "../../api/bookAPI";
import BookCoverPlaceholder from "../../shared/book-cover-placeholder.png";
import Books from "./Books";

import { Button, 
         Container, 
         ContainerInline, 
         FlexRow 
} from "../../components/CommonComponents";
import Spinner from "../../components/Spinner";

const ContainerInlineTextAlignLeft = styled(ContainerInline)`
 align-items: flex-start;
 `;

 const H1 = styled.h1`
  text-algn: left;
  `;

  const H2 = styled.h2`
  text-align: left;
  `;

const Book = ({id, handleBackClick}) =>{

    const [isLoading, setIsLoading] = useState(false);
    const [book, setBook] = useState(null);

    useEffect(() =>{
        setIsLoading(true);
        getBook(id)
        .then((Response)=>{
            if(!Response.error){
                setBook(Response.data);
            }
        })
        .catch((error) =>{
            console.log(error);
        })
        .finally(() =>{
            setIsLoading(false);
        });
    }, [id]);

    return (
        <Container>
            <Button onClick={handleBackClick}>
                <IoReturnUpBack />
            </Button>
            {!isLoading && book !== null ? (
                <>
                <FlexRow>
                    <ContainerInlineTextAlignLeft>
                <H1>{book.title}</H1>
                <H2>{`by ${book.author}`}</H2>
                <p>
                lorem asddd assdrtgb mljhga  aaaaaa
                assddd aserddd  awerssd qwersdd mklty 
                asertfdd bnmhh
                </p>
                {book.isAvailable ? (
                    ""
                ) : (
                    <>
                    <h4>{`Burrowed by: ${book.borrowedMemberId}`}</h4>
                    <h4>{`Burrowed by: ${book.borrowedDate}`}</h4>
                    </>
                )}
                </ContainerInlineTextAlignLeft>
                <ContainerInline>
                    <img
                    src = {BookCoverPlaceholder}
                    alt = "Book Cover Placeholder" />
                    style = {{border: "1px solid black"}}
                </ContainerInline>
                </FlexRow>
                <FlexRow>
                    {book.isAvailable ? (
                        <>
                        <Button 
                           onClick = {() =>console.log("Call lend API")}
                           >
                               Lend
                           </Button>
                           <Button
                               danger
                               onClick = {() =>
                               console.log("Call deleteBook API")
                               }
                               >
                               Delete
                           </Button>
                           </>
                    ): (
                        <>
                        <h4> {`Burrowed by: ${book.borrowedMemberId}`}</h4>
                        <h4> {`Burrowed date: ${book.borrowedDate}`}</h4>
                        <Button
                            onClick = {() => console.log("Call return API")}
                            >
                            Return
                        </Button>
                        </>
                    )}
                </FlexRow>
                </>
            ) : (
                 <Spinner /> 
            )}
        </Container>
    );
};

export default Book;