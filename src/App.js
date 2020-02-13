import React from 'react';
// import './App.css';
import {BrowserRouter as Router, Link, Route}
    from 'react-router-dom'
import './styles/CourseList.style.client.css'
import CourseManagerContainer from "./containers/CourseManagerContainer";
import CourseEditorComponent from "./components/courseEditor/CourseEditorComponent"


const App = () =>
    <CourseManagerContainer/>
export default App;
