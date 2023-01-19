import React from 'react';
import Card from '../components/Card';
import {Route, Routes, useLocation} from "react-router-dom";
import Home from './Home';
import CourseGradePage from './CourseGradePage';
import Faculty from './Faculty';
import CourseReviewPage from './CourseReviewPage';


function Pages() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/faculty/:name" element={<Faculty />} />
        <Route path="/cc/:name" element={<Faculty />} />
        <Route path="/courses/grades/:name" element={<CourseGradePage />} />
        <Route path="/courses/reviews/:name" element={<CourseReviewPage />} />
    </Routes>
  )
}

export default Pages