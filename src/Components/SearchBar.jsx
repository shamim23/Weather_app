import React from "react";

const SearchBar = (props) => {
    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          props.search()
        }
      }
    
    
    return (
         
        <div className="search">
          <div className="search-top">
            <i className="fa-solid fa-location-dot"></i>
            <div className="location">{props.name}</div>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Enter Location"
              onChange={props.handleInputChange}
              onKeyDown={handleKeyDown}
              value={props.location}
            />
            <i className="fa-solid fa-magnifying-glass" onClick={props.search}></i>
          </div>
        </div>
    );
};

export default SearchBar;