import {COURSES_MODULES_API_URL} from "../common/constants";
import {MODULES_API_URL} from "../common/constants";

class ModuleService {
    createModule = (courseId, module) => {
        return fetch(COURSES_MODULES_API_URL(courseId), {
            method: 'POST',
            body: JSON.stringify(module),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    findModulesForCourse = (courseId) => {
        return fetch(COURSES_MODULES_API_URL(courseId))
            .then(response => response.json())
    }

    findModule = (moduleId) => {
        return fetch(`${MODULES_API_URL}/${moduleId}`)
            .then(response => response.json())
    }

    updateModule = (moduleId, module) => {
        console.log(module);
        return fetch(`${MODULES_API_URL}/${moduleId}`, {
            method: 'PUT',
            body: JSON.stringify(module),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
    }

    deleteModule = (moduleId) => {
        return fetch(`${MODULES_API_URL}/${moduleId}`, {
            method: 'DELETE'
        }).then(response => response.json())
    }
}

export default ModuleService