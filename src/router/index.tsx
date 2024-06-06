import {BrowserRouter, Routes, Route} from "react-router-dom";

import UsersPage from "../pages/users"
import RegisterPage from "../pages/register";

const WebRouter = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route element={<UsersPage/>} path="/" />
            <Route element={<RegisterPage/>} path="/register" />
        </Routes>
        </BrowserRouter>
    );
}

export default WebRouter;