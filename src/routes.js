import {randomUUID} from "node:crypto"
import {Database} from "./database.js";

const database = new Database()

export const routes = [
    {
        method: 'POST',
        path: '/tasks',
        handler: (request, response) => {
            const {title, description} = request.body
            const task = {
                id: randomUUID(),
                title,
                description,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
                completed_at: null,
            }

            database.insert('tasks', task)

            return response.writeHead(201).end(JSON.stringify(task))

        }
    },
    {
        method: 'GET',
        path: '/tasks',
        handler: (request, response) => {
            console.log('Hello World')
            return response.writeHead(200).end(JSON.stringify('Hello World'))
        }
    },
    {
        method: 'PUT/:id',
        path: '/tasks',
        handler: (request, response) => {

        }
    },
    {
        method: 'DELETE/:id',
        path: '/tasks',
        handler: (request, response) => {

        }
    },
    {
        method: 'PATCH/:id/complete',
        path: '/tasks',
        handler: (request, response) => {

        }
    }
]