import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import ContentSection from "./contentSection.component"
import SearchBar from "./searchBar.component";


export const Main = props =>{
    // hook Redux для отслеживания событий
    const dispatch = useDispatch();
    useEffect(()=>{
        // запрос данных с сервера через прокси
        // (т.к отсутвтвует заголовок Access-Control-Allow-Origin)
        fetch(`https://jsonp.afeld.me/?url=https://www.mrsoft.by/data.json`)
            .then(response => response.json())
            .then(data => {
                // запись в хранилище
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

