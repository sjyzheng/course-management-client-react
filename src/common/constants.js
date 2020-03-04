export const COURSES_API_URL = "https://wbdv-generic-server.herokuapp.com/api/sjzheng/courses";
export const MODULES_API_URL = "https://wbdv-generic-server.herokuapp.com/api/sjzheng/modules";
export const LESSONS_API_URL = "https://wbdv-generic-server.herokuapp.com/api/sjzheng/lessons";
export const TOPICS_API_URL = "http://localhost:8080/api/topics";
export const WIDGETS_API_URL = "http://localhost:8080/api/widgets";

export const COURSES_MODULES_API_URL = (courseId) => `https://wbdv-generic-server.herokuapp.com/api/sjzheng/courses/${courseId}/modules`;
export const MODULES_LESSONS_API_URL = (moduleId) => `https://wbdv-generic-server.herokuapp.com/api/sjzheng/modules/${moduleId}/lessons`;
export const LESSONS_TOPICS_API_URL = (lessonId) => `http://localhost:8080/api/lessons/${lessonId}/topics`;
export const TOPICS_WIDGETS_API_URL = (topicId) => `http://localhost:8080/api/topics/${topicId}/widgets`;
