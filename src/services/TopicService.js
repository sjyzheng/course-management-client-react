import {LESSONS_TOPICS_API_URL} from "../common/constants";
import {TOPICS_API_URL} from "../common/constants";

class TopicService {
    createTopic = (lessonId, topic) => {
        return fetch(LESSONS_TOPICS_API_URL(lessonId), {
            method: 'POST',
            body: JSON.stringify(topic),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    findTopicsForLesson = (lessonId) => {
        return fetch(LESSONS_TOPICS_API_URL(lessonId))
            .then(response => response.json())
    }

    findTopic = (topicId) => {
        return fetch(`${TOPICS_API_URL}/${topicId}`)
            .then(response => response.json())
    }

    updateTopic = (topicId, topic) => {
        return fetch(`${TOPICS_API_URL}/${topicId}`, {
            method: 'PUT',
            body: JSON.stringify(topic),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
    }

    deleteTopic = (topicId) => {
        return fetch(`${TOPICS_API_URL}/${topicId}`, {
            method: 'DELETE'
        }).then(response => response.json())
    }
}

export default TopicService