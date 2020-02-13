import {COURSES_API_URL} from "../common/constants";

class CourseService {
    createCourse = (course) => {
        return fetch(COURSES_API_URL, {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    findAllCourses = () => {
        return fetch(COURSES_API_URL)
            .then(response => response.json())
    }

    findCourseById = (id) => {
        return fetch(`${COURSES_API_URL}/${id}`)
            .then(response => response.json())
    }

    updateCourse = (id, course) => {
        return fetch(`${COURSES_API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(course),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
    }

    deleteCourse = (id) => {
        return fetch(`${COURSES_API_URL}/${id}`, {
            method: 'DELETE'
        }).then(response => response.json())
    }
}

export default CourseService