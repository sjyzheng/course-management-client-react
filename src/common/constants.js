export const COURSES_API_URL = "https://wbdv-sp20-jzheng-server-java.herokuapp.com/api/courses";
export const MODULES_API_URL = "https://wbdv-sp20-jzheng-server-java.herokuapp.com/api/modules";
export const LESSONS_API_URL = "https://wbdv-sp20-jzheng-server-java.herokuapp.com/api/lessons";
export const TOPICS_API_URL = "https://wbdv-sp20-jzheng-server-java.herokuapp.com/api/topics";
export const WIDGETS_API_URL = "https://wbdv-sp20-jzheng-server-java.herokuapp.com/api/widgets";

export const COURSES_MODULES_API_URL = (courseId) => `https://wbdv-sp20-jzheng-server-java.herokuapp.com/api/courses/${courseId}/modules`;
export const MODULES_LESSONS_API_URL = (moduleId) => `https://wbdv-sp20-jzheng-server-java.herokuapp.com/api/modules/${moduleId}/lessons`;
export const LESSONS_TOPICS_API_URL = (lessonId) => `https://wbdv-sp20-jzheng-server-java.herokuapp.com/api/lessons/${lessonId}/topics`;
export const TOPICS_WIDGETS_API_URL = (topicId) => `https://wbdv-sp20-jzheng-server-java.herokuapp.com/api/topics/${topicId}/widgets`;
