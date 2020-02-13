import React from 'react';
// import './App.css';
import {BrowserRouter as Router, Link, Route}
    from 'react-router-dom'
import './styles/CourseList.style.client.css'
import CourseManagerContainer from "./containers/CourseManagerContainer";
import CourseEditorComponent from "./components/courseEditor/CourseEditorComponent"


const App = () => (
    <Router>
        <div className="Page">
            <Route path="/" component={CourseManagerContainer} exact/>
            <Route path="/courses/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId" component={CourseEditorComponent}/>
        </div>
    </Router>
)

export default App;
