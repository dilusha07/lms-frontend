import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';

import Tabs from "../../components/Tabs";
import Spinner from "../../components/Spinner";

import Books from "./Books/index";

import { setBooks } from "../../store/booksSlice";
import { getBooks } from "../../api/bookAPI";

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(false);
    
    
    const books = useSelector((state) => state.books.value);
    const dispatch = useDispatch();

    useEffect(() => {
      setIsLoading(true);
      getBooks()
        .then((response) => {
            if(!response.error) {
                console.log(response.data);
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
    const contents = [
        {
            title: "Books", 
            element: <Books catalog = {books} />
        },
        {
            title: "Members", 
            element: <h1>Contents of books go here.</h1>
        },
        
    ]
     
    return (
       
        isLoading ? <Spinner /> : <Tabs contents ={contents}/>   
    );
};

export default Dashboard;