import { Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import BookingPage from "./booking/BookingPage";
import PersonalPage from "./personal/PersonalPage";
import ConfirmationPage from "./confirm/ConfirmationPage";
import UnderConstruction from "./UnderConstruction";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/book' element={<BookingPage />}></Route>
                <Route path='/personal' element={<PersonalPage />}></Route>
                <Route path='/confirmation' element={<ConfirmationPage />}></Route>
                <Route path='/about' element={<UnderConstruction />}></Route>
                <Route path='/menu' element={<UnderConstruction />}></Route>
                <Route path='/reservations' element={<UnderConstruction />}></Route>
                <Route path='/order-online' element={<UnderConstruction />}></Route>
                <Route path='/login' element={<UnderConstruction />}></Route>
            </Routes>
        </main>
    );
};

export default Main;
