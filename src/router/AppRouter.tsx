import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Teacher from "../pages/Teacher";







import Student from "../pages/estudiante/Dashboard";


const AppRouter: React.FC = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Home />}/>
                <Route path="/student" element={<Student />} />
                <Route path="/teacher" element={<Teacher />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;
