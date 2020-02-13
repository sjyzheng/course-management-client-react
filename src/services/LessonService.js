import {MODULES_LESSONS_API_URL} from "../common/constants";
import {LESSONS_API_URL} from "../common/constants";

class LessonService {
    createLesson = (moduleId, lesson) => {
        return fetch(MODULES_LESSONS_API_URL(moduleId), {
            method: 'POST',
            body: JSON.stringify(lesson),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    findLessonsForModule = (moduleId) => {
        return fetch(MODULES_LESSONS_API_URL(moduleId))
            .then(response => response.json())
    }

    findLesson = (lessonId) => {
        return fetch(`${LESSONS_API_URL}/${lessonId}`)
            .then(response => response.json())
    }

    updateLesson = (lessonId, lesson) => {
        return fetch(`${LESSONS_API_URL}/${lessonId}`, {
            method: 'PUT',
            body: JSON.stringify(lesson),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
    }

    deleteLesson = (lessonId) => {
        return fetch(`${LESSONS_API_URL}/${lessonId}`, {
            method: 'DELETE'
        }).then(response => response.json())
    }
}

export default LessonService