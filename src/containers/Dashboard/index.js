import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';

import Tabs from "../../components/Tabs";
import Spinner from "../../components/Spinner";

import Books from "./Books/index";

import { setBooks } from "../../store/booksSlice";
import { getBooks } from "../../api/bookAPI";
import { getMembers } from "../../api/memberAPI";

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [members, setMembers] = useState(null);
    
    const books = useSelector((state) => state.books.value);
    const dispatch = useDispatch();

    useEffect(() => {
      setIsLoading(true);
      getBooks()
        .then((response) => {
            if(!response.error) {
                
                dispatch(setBooks(response.data));
            }
        })
        .catch((error)=> {
            console.log(error);
        })
        .finally(() => {
            setIsLoading(false);
        });
        
    }, [dispatch]);

    useEffect(() => {
        setIsLoading(true);
        getMembers()
            .then((response) => {
                if (!response.error) {
                    setMembers(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const contents = [
        {
            title: "Books", 
            element: <Books catalog = {books} />
        },
        {
            title: "Members", 
            element: <Members members={members}/>
        },
        
    ]
     
    return (
       
        isLoading ? <Spinner /> : <Tabs contents ={contents}/>   
    );
};

export default Dashboard;