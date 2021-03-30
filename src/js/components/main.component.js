import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import ContentSection from "./contentSection.component"
import SearchBar from "./searchBar.component";


export const Main = props =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        fetch(`https://api.allorigins.win/get?url=https://www.mrsoft.by/data.json`)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type:"GET_DATA",
                    payload:JSON.parse(data.contents)
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

