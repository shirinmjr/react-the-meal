import React, { useState } from "react"
import axios from "axios";
import { NAME_URL } from "../globals";
import Searches from "./Searches";

export default function SearchBar () {

    const [searchInput, setSearchInput] = useState("")
    const [searchedMeals, setSearchedMeals] = useState("")

    const getSearchedMeal = async(searchInput) => {
        const response = await axios.get(`${NAME_URL}${searchInput}`);
        console.log(response.data.meals);
        setSearchedMeals(response.data.meals);
    }

    const handleChange = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value)
        getSearchedMeal(searchInput)
      }

    return(
        <div>
            <div className="searchbar">
                <h3> or Search for Meal: </h3>
                <input 
                    type="text" 
                    placeholder="Search" 
                    value={searchInput} 
                    onChange={handleChange} />
            </div>
            <Searches searchedMeals={searchedMeals}/>
        </div>
    )
}