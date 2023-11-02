import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MealPage from "./MealPage";

function Main() {
    return (
        <div>
            <div className='Main'>
                <Routes>
                    <Route path='/' exact={true} element={<Home/>} />
                    <Route path='/MealPage' exact={true} element={<MealPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default Main;