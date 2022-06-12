/* eslint-disable jest/require-hook */
import axios from 'axios'
const serverUrl = 'api/phonebook'

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAll = async () => {
    const response = await axios.get(serverUrl)
    return response.data
}

const create = async (newInfo) => {
    const config = {
        headers: { Authorization: token },
    }
    const response = await axios.post(serverUrl, newInfo, config)
    return response.data
}

const update = (id, newInfo) => {
    const request = axios.put(`${serverUrl}/${id}`, newInfo)
    return request.then(respose => respose.data)
}

const borrar = (id) => {
    const request = axios.delete(`${serverUrl}/${id}`)
    return request.then(response => response)
}

export default { getAll, create, update, borrar, setToken }
