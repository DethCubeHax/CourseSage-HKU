import React from 'react';
import Card from '../components/Card';
import {Route, Routes, useLocation} from "react-router-dom";
import Home from './Home';
import CourseGradePage from './CourseGradePage';
import Faculty from './Faculty';
import CourseReviewPage from './CourseReviewPage';
import Searched from './Searched';
import LoginPage from './Login';
import RegisterPage from './Register';


function Pages() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/searched/:name" element={<Searched />} />
        <Route path="/faculty/:name" element={<Faculty />} />
        <Route path="/cc/:name" element={<Faculty />} />
        <Route path="/courses/grades/:name" element={<CourseGradePage />} />
        <Route path="/courses/reviews/:name" element={<CourseReviewPage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
    </Routes>
  )
}

export default Pages