

export default function Searches (props) {

    if (!props.searchedMeals) {
        console.log('man')
    } else {
    return(
        <div>
            <div className="areas-grid">
                {props.searchedMeals.map((meal)=>(
                    <div className="card" key={meal.idMeal}>
                        <h3> {meal.strMeal} </h3>
                        <img src={meal.strMealThumb} />
                    </div>
                ))}
            </div>
        </div>
    )
}}