import React from "react";
import './SearchBar.css'

const SearchBar = ({input, setInput, setQuery}) => {

    const handleInput = (event) => {
        setInput(event.target.value);
        console.log("handle input " + input);
    }

    const handleSearch = () => {
        setQuery(input);
    }

    const handleEnterKey = (event) => {
        if(event.key === 'Enter') {
            setQuery(input);
        }
    }

    return (
        <div className="searchbar">
            <input 
                type="text"
                placeholder="Search Here..."
                onChange = {handleInput}
                value = {input}
                onKeyDown={handleEnterKey}
                className="search-input"
            />
            <button type="submit" onClick={handleSearch} className="search-button">Search</button>
        </div>
    )
}

export default SearchBar;