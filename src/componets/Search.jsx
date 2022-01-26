import React from 'react'
import styles from "./Search.module.css"
import { FaSearch } from "react-icons/fa"
import { useState } from "react"
import {useHistory} from "react-router";
import { useEffect } from 'react/cjs/react.development';
import {useQuery} from "../Hooks/useQuery";

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
            <div className={styles.searchBox}>
                <input className={styles.searchInput}
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
