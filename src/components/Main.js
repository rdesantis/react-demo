import { Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import BookingPage from "./booking/BookingPage";
import PersonalPage from "./personal/PersonalPage";
import UnderConstruction from "./UnderConstruction";
import ConfirmationPage from "./confirm/ConfirmationPage";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/about' element={<UnderConstruction />}></Route>
                <Route path='/menu' element={<UnderConstruction />}></Route>
                <Route path='/reservations' element={<BookingPage />}></Route>
                <Route path='/personal' element={<PersonalPage />}></Route>
                <Route path='/confirmation' element={<ConfirmationPage />}></Route>
                <Route path='/order-online' element={<UnderConstruction />}></Route>
                <Route path='/login' element={<UnderConstruction />}></Route>
            </Routes>
        </main>
    );
};

export default Main;
