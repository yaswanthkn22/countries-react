import { useState } from "react";
const Search = ({onSearch, search})=>{
    return (
        <div className="search-container">
            <input type="text" placeholder="Please search here" value={search} onChange={
                (e)=>{
                    onSearch(e.target.value);
            }
            } />
         </div>
    );
   
}

export default Search