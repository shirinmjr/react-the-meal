import { useState, useEffect } from 'react';
import Areas from './Areas';
import Categories from './Categories';
import { AREA_URL, CATEGORY_URL } from '../globals';
import axios from 'axios';

export default function Displays(props) {
  const [areasMeals, setAreasMeals] = useState([]);
  const [categoriesMeals, setCategoriesMeals] = useState([]);

  useEffect(() => {
    const getAreasMeals = async () => {
      const response = await axios.get(`${AREA_URL}${props.area}`);
      console.log(response.data.meals);
      setAreasMeals(response.data.meals);
    };
    getAreasMeals();
  }, [props.area]);

  useEffect(() => {
    const getCategoriesMeals = async () => {
      const response = await axios.get(`${CATEGORY_URL}${props.category}`);
      console.log(response.data.meals);
      setCategoriesMeals(response.data.meals);
    };
    getCategoriesMeals();
  }, [props.category]);

  return (
    <>
      <Areas areasMeals={areasMeals} />
      <Categories categoriesMeals={categoriesMeals} />
    </>
  );
}
