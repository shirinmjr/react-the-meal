import { useState, useEffect, Button, Input } from 'react';
import { CATEGORY_LIST, AREA_LIST } from '../globals';
import axios from 'axios';
import Displays from './Displays';
import SearchBar from './SearchBar';

export default function Home(props) {

    const [categoriesList, setCategoriesList] = useState([]);
    const [areasList, setAreasList] = useState([]);
    const [category, setCategory] = useState([]);
    const [area, setArea] = useState([]);


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
    }, []);
    function selectCategory(category) {
        console.log("select category", category);
        setCategory(category);
    }
    function selectArea(area) {
        console.log("select area", area);
        setArea(area);
    }
    return (
        <div>
            <h1>Welcome To Foodies Food</h1>
            <select className='category-select'
                onChange={(e) => { selectCategory(e.target.value); }}>
                <option>Select A Food Category</option>
                {categoriesList.map((category, key) => {
                    return <option key={key} value={category.strCategory}>{category.strCategory}</option>;
                }
                )}
            </select>
            <select className='area-select'
                onChange={(e) => { selectArea(e.target.value); }}>
                <option>Select A Food Area</option>;
                {areasList.map((area, key) => {
                    return <option key={key}>{area.strArea}</option>;
                })}
            </select>
            <br />

            <SearchBar />
            <Displays category={category} area={area} />
        </div>
    );
}



