import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import ContentSection from "./contentSection.component"
import SearchBar from "./searchBar.component";


export const Main = props =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        fetch(`https://cors-anywhere.herokuapp.com/https://www.mrsoft.by/data.json`)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type:"GET_DATA",
                    payload:data
                })
            })
    },[])
    return (
        <main className="main">
            <SearchBar/>
            <ContentSection/>
        </main>
    )
}

