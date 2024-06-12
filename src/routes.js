export const routes = [
    {
        method: 'POST',
        path: '/tasks',
        handler: (request, response) => {

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