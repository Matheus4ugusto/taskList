import http from "node:http";
import {routes} from "./routes.js";
import {json} from "./middlewares/json.js";

const server = http.createServer(async (request, response) => {
    const {method, url} = request;
    console.log(request)

    await json(request, response)

    const route = routes.find(route => route.method === method.toUpperCase() && route.path === url)

    if(route){
        return route.handler(request, response)
    }

    return response.writeHead(404).end()

})

server.listen(8000)