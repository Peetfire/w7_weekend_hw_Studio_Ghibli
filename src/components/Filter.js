import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

const Filter = ({handleChange}) => {

    const [searchTerm, setSearchTerm] = useState("");

    const changeSearchTerm = (event) => {
        event.preventDefault();
        setSearchTerm(event.target.value);
    }

    useEffect(() => {
        handleChange(searchTerm);
    }, [searchTerm]);

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
        <input
            onChange={changeSearchTerm}
            type="text"
            name="searchTerm"
            placeholder="Filter"
            value={searchTerm} />
        </form>
    )
}

export default Filter;