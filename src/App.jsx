import { useState } from 'react';
import { AREA_URL, CATEGORY_URL } from './globals';
import axios from 'axios';
import './App.css';
import Home from './components/Home';
import Areas from './components/Areas';
import Categories from './components/Categories';

function App() {
  const [areasMeals, setAreasMeals] = useState([]);
  const [categoriesMeals, setCategoriesMeals] = useState([]);


  const getAreasMeals = async (area) => {
    const response = await axios.get(`${AREA_URL}${area}`);
    console.log(response.data.meals);
    setAreasMeals(response.data.meals);
  };

  const getCategoriesMeals = async (category) => {
    console.log("get category function");
    const response = await axios.get(`${CATEGORY_URL}${category}`);
    console.log(response.data.meals);
    setCategoriesMeals(response.data.meals);
  };

  return (
    <>
      <Home getCategoriesMeals={getCategoriesMeals} getAreasMeals={getAreasMeals} />
      <Areas areasMeals={areasMeals} />
      <Categories categoriesMeals={categoriesMeals} />
    </>
  );
}

export default App;
