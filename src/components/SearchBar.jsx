import React, { useState } from "react"

export default function SearchBar () {

    const [searchInput, setSearchInput] = useState("")

    const handleChange = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value)
        console.log(searchInput)
      }

    return(
        <div>
            <h3>Search for Meal: </h3>
            <input 
                type="text" 
                placeholder="Search" 
                value={searchInput} 
                onChange={handleChange} />
        </div>
    )
}