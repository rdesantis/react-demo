import { Routes, Route } from "react-router-dom";
import Home from "./home-page/Home";
import Reservation from "./reservation/Reservation";
import UnderConstruction from "./UnderConstruction";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<UnderConstruction />}></Route>
                <Route path='/menu' element={<UnderConstruction />}></Route>
                <Route path='/reservations' element={<Reservation />}></Route>
                <Route path='/order-online' element={<UnderConstruction />}></Route>
                <Route path='/login' element={<UnderConstruction />}></Route>
            </Routes>
        </main>
    );
};

export default Main;
