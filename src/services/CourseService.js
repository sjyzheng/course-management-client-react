class CourseService {

    createCourse = (course) => {
        return fetch('https://wbdv-generic-server.herokuapp.com/api/sjzheng/courses', {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    findAllCourses = () => {
        return fetch('https://wbdv-generic-server.herokuapp.com/api/sjzheng/courses')
            .then(response => response.json())
    }

    findCourseById = (id) => {
        return fetch(`https://wbdv-generic-server.herokuapp.com/api/sjzheng/courses/${id}`)
            .then(response => response.json())
    }

    updateCourse = (id, course) => {
        return fetch(`https://wbdv-generic-server.herokuapp.com/api/sjzheng/courses/${id}`, {
            method: 'PUT',
            body: JSON.stringify(course),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
    }

    deleteCourse = (id) => {
        return fetch(`https://wbdv-generic-server.herokuapp.com/api/sjzheng/courses/${id}`, {
            method: 'DELETE'
        }).then(response => response.json())
    }
}

export default CourseService