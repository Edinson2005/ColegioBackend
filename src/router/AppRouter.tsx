import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Student from "../pages/Student";
import Teacher from "../pages/teacher";

const AppRouter: React.FC = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/student" element={<Student />} />
                <Route path="/teacher" element={<Teacher />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;
