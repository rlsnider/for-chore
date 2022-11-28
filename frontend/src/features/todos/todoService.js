import axios from 'axios'

const API_URL = '/api/todos/'

//Create new Chore(todo)
const createTodo = async (todoData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, todoData, config)

    return response.data
}
//Get Chores(todos)
const getTodos = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)

    return response.data
}


const todoService = {
    createTodo,
    getTodos,
}
export default todoService