import axios from 'axios'
const serverUrl = 'api/phonebook'

const getAll = () => {
    const request = axios.get(serverUrl)
    return request.then(response => response.data)
}

const create = (newInfo) => {
    const request = axios.post(serverUrl, newInfo)
    return request.then(respose => respose.data)
}

const update = (id, newInfo) => {
    const request = axios.put(`${serverUrl}/${id}`, newInfo)
    return request.then(respose => respose.data)
}

const borrar = (id) => {
    const request = axios.delete(`${serverUrl}/${id}`)
    return request.then(response => response)
}

export default { getAll, create, update, borrar }
