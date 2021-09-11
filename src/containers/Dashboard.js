import React from "react";

import Tabs from "../components/Tabs";
 
const Dashboard = () => {
    const contents = [
        {title: "Books", element: <h1>Contents of books go here.</h1>},
        {title: "Members", element: <h1>Contents of books go here.</h1>},
        
    ]
     
    return (
        <Tabs contents ={contents} />
    );
};

export default Dashboard;