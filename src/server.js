import http from "node:http";
import {routes} from "./routes.js";

const server = http.createServer((request, response) => {
    const {method, url} = request;

    const route = routes.find(route => route.method === method.toUpperCase() && route.path === url)

    if(route){
        return route.handler(request, response)
    }

    return response.writeHead(404).end()

})

server.listen(8000)