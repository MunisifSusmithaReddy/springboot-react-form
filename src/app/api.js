import axios from 'axios';

export const savePersonData = (formData) => {
    return axios.post('http://localhost:8081/api/person', formData);
}

export const getAllPersonsData = () => {
    return axios.get('http://localhost:8081/api/persons');
}