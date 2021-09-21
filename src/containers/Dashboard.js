import React, {useEffect, useState} from "react";

import Tabs from "../components/Tabs";

import { getBooks } from "../api/bookAPI";
import Spinner from "../components/Spinner";


const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      setIsLoading(true);
      getBooks()
        .then((Response) => {
            if(!Response.error) {
                console.log(Response.data);
            }
        })
        .catch((error)=> {
            console.log(error);
        })
        .finally(() => {
            setIsLoading(false);
        })
        
    }, [])
    const contents = [
        {
            title: "Books", 
            element: <h1>Contents of books go here.</h1>
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