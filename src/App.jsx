import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Areas from './components/Areas';
import Categories from './components/Categories';

import { AREA_URL, CATEGORY_URL } from './globals';
import axios from 'axios';

function App() {
  const [areasMeals, setAreasMeals] = useState([]);
  const [categoriesMeals, setCategoriesMeals] = useState([]);

  useEffect(() => {
    const getAreasMeals = async () => {
      const response = await axios.get(`${AREA_URL}Canadian`);
      console.log(response.data.meals);
      setAreasMeals(response.data.meals);
    };
    getAreasMeals();
  }, []);

  useEffect(() => {
    const getCategoriesMeals = async () => {
      const response = await axios.get(`${CATEGORY_URL}Seafood`);
      console.log(response.data.meals);
      setCategoriesMeals(response.data.meals);
    };
    getCategoriesMeals();
  }, []);

  return (
    <>
      <Home />
      <Areas areasMeals={areasMeals} />
      <Categories categoriesMeals={categoriesMeals} />
    </>
  );
}

export default App;
