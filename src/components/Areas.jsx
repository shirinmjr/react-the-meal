import './Areas.css';
import { Link } from "react-router-dom";
import MealPage from './MealPage';

export default function Areas(props) {

    if (!props.areasMeals) {
        console.log('man');
    } else {
        return (
            <div>
                <div className="areas-grid">
                    {props.areasMeals.map((meal) => (
                        <div className="card" key={meal.idMeal}>
                            <Link to="/MealPage">
                                <h3> {meal.strMeal} </h3>
                                <img src={meal.strMealThumb} />
                            </Link>

                        </div>
                    ))}
                </div>
            </div>
        );
    }
}