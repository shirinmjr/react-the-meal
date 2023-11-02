import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AreasPage from "./AreasPage";

function Main() {
    return (
        <div>
            <div className='Main'>
                <Routes>
                    <Route path='/' exact={true} element={<Home/>} />
                    <Route path='/AreasPage' exact={true} element={<AreasPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default Main;