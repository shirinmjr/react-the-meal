import { useState, useEffect } from 'react';
import { CATEGORY_LIST, AREA_LIST } from '../globals';
import axios from 'axios';

export default function Home(props) {

    const [categoriesList, setCategoriesList] = useState([]);
    const [areasList, setAreasList] = useState([]);

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

    return (
        <div>
            <h1>Welcome To Foodies Food</h1>
            <select className='category-select'
                onChange={(e) => { props.getCategoriesMeals(e.target.value); }}>
                <option>Select A Food Category</option>
                {categoriesList.map((category, key) => {
                    return <option key={key} value={category.strCategory}>{category.strCategory}</option>;
                }
                )}
            </select>

            <select className='area-select'
                onChange={(e) => { props.getAreasMeals(e.target.value); }}>
                <option>Select A Food Area</option>;
                {areasList.map((area, key) => {
                    return <option key={key} value={area.strArea}>{area.strArea}</option>;
                }
                )}
            </select>
        </div>
    );
}



