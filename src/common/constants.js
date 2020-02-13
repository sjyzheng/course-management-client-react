export const COURSES_API_URL = "https://wbdv-generic-server.herokuapp.com/api/sjzheng/courses"
export const MODULES_API_URL = "https://wbdv-generic-server.herokuapp.com/api/sjzheng/modules"
export const LESSONS_API_URL = "https://wbdv-generic-server.herokuapp.com/api/sjzheng/lessons"
export const TOPICS_API_URL = "https://wbdv-generic-server.herokuapp.com/api/sjzheng/topics"

export const COURSES_MODULES_API_URL = (courseId) => `https://wbdv-generic-server.herokuapp.com/api/sjzheng/courses/${courseId}/modules`
export const MODULES_LESSONS_API_URL = (moduleId) => `https://wbdv-generic-server.herokuapp.com/api/sjzheng/modules/${moduleId}/lessons`
export const LESSONS_TOPICS_API_URL = (lessonId) => `https://wbdv-generic-server.herokuapp.com/api/sjzheng/lessons/${lessonId}/topics`