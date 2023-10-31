

export default function Areas (props) {


    return(
        <div>
            <div className="areas-grid">
                {props.meals.map((meal)=>(
                    <div className="card" key={meal.idMeal}>
                        <h3> {meal.strMeal} </h3>
                        <img src={meal.strMealThumb} />
                    </div>
                ))}
            </div>
        </div>
    )
}