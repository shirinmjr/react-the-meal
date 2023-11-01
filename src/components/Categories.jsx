import './Categories.css'


export default function Categories (props) {

    if (!props.categoriesMeals) {
        console.log('man')
    } else {
    return(
        <div>
            <div className="categories-grid">
                {props.categoriesMeals.map((meal)=>(
                    <div className="card" key={meal.idMeal}>
                        <h3> {meal.strMeal} </h3>
                        <img src={meal.strMealThumb} />
                    </div>
                ))}
            </div>
        </div>
    )
}}