import { useState, useEffect } from 'react';
import { CATEGORY_LIST, AREA_LIST } from '../globals';
import axios from 'axios';
import Displays from './Displays';
import SearchBar from './SearchBar';

export default function Home() {
    const [areasList, setAreasList] = useState([]);
    const [categoriesList, setCategoriesList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedArea, setSelectedArea] = useState('')

    useEffect(() => {
        const getFoodCategoriesList = async () => {
            const categoriesList = await axios.get(`${CATEGORY_LIST}`);
            console.log(categoriesList.data.meals);
            setCategoriesList(categoriesList.data.meals);
        };

        const getFoodAreasList = async () => {
            const areasList = await axios.get(`${AREA_LIST}`);
            console.log(areasList.data.meals);
            setAreasList(areasList.data.meals);
        };
        getFoodCategoriesList();
        getFoodAreasList();
    }, [selectedArea]);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value)
        console.log(selectedCategory)
    }
    const handleAreaChange = (event) => {
        setSelectedArea(event.target.value)
        console.log(selectedArea)
    }

    return (
        <div>
            <h1>Welcome To Foodies Food</h1>
            <select onChange={handleCategoryChange} value={selectedCategory}>
                <option>Select A Food Category</option>;
                {categoriesList.map((category, key) => {
                    return <option key={key}>{category.strCategory}</option>;
                })}
            </select>
            <select onChange={handleAreaChange} value={selectedArea}>
                <option>Select A Food Area</option>;
                {areasList.map((area, key) => {
                    return <option key={key}>{area.strArea}</option>;
                })}
            </select>
            <SearchBar />
            <Displays areaSelected={selectedArea} categorySelected={selectedCategory}/>

        </div>
    );
}
