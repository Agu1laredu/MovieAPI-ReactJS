import React from 'react'
import styles from "./Search.module.css"
import { useState } from "react"
import {useHistory} from "react-router";
import { useEffect } from 'react';
import {useQuery} from "../Hooks/useQuery";
//query
import {} from "./Query1000.css"
import {} from "./Query950.css"
import {} from "./Query900.css"
import {} from "./Query800.css"
import {} from "./Query700.css"
import {} from "./Query600.css"
import {} from "./Query450.css"



function Search() {
    const query = useQuery() ; 
    const search = query.get("search");
  

    const [searchText, setSearchText] = useState("");
    const history = useHistory();

    useEffect(() => {
        setSearchText(search || "");

    }, [search]);


    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/?search=" + searchText);
    };
    return (
        <form className={styles.searchConteiner} onSubmit={handleSubmit}>
            <div id='moverr' className={styles.searchBox}>
                <input id='mover' className={styles.searchInput}
                    type="text"
                    value={search}
                    onChange={(e) => {
                        const value = e.target.value;
                        history.push("/?search=" + value);
                    }} />

                
                   
                
            </div>
        </form>
    )
}

export default Search
