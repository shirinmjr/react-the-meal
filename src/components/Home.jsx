import { useState, useEffect } from 'react';
import { CATEGORY_LIST, AREA_LIST } from '../globals';
import axios from 'axios';

export default function Home() {
    const [areasList, setAreasList] = useState([]);
    const [categoriesList, setCategoriesList] = useState([]);

    useEffect(() => {
        const getFoodCategoriesList = async () => {
            const categoriesList = await axios.get(`${CATEGORY_LIST}`);
            console.log(categoriesList.data.meals);
            setCategoriesList(categoriesList.data.meals);
        };

        const getFoodAreasList = async () => {
            const areasList = await axios.get(`${AREA_LIST}`);
            console.log(areasList.data.meals);
            setAreasList(categoriesList.data.meals);
        };
        getFoodCategoriesList();
        getFoodAreasList();
    }, []);

    return (
        <div>
            <h1>Welcome To Foodies Food</h1>
            <select>
                <option>Select A Food Category</option>;
                {categoriesList.map((category, key) => {
                    return <option key={key}>{category.strCategory}</option>;
                })}
            </select>
            <select>
                <option>Select A Food Area</option>;
                {areasList.map((category, key) => {
                    return <option key={key}>{areasList.strArea}</option>;
                })}
            </select>

        </div>
    );
}
