

export default function Categories (props) {


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
}