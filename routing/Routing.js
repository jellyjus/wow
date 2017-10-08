const Util = require('util');
const Routes = require('./routesConfig');
const Task = require('./Task');

class Routing {
    constructor(db) {
        this.db = db;
        this.createRoutes();
    }

    createRoutes() {
        this.routes = {};

        for (let route in Routes) {
            this.routes[route] = new Routes[route](this.db)
        }
    }

    handle(handler) {
        return (req, res) => {
            const task = new Task(req, res);
            const params = Util.inspect(task.params);
            console.log(`Handle request ${task.req.method} ${task.req.url}, with params ${params}`);

            return handler.handle(task);
        }
    }

    createRouteHandlers(express) {
        let router = express.Router();

        router.get('/', this.handle(this.routes.index));
        router.get('/health', (req, res) => res.send('ok'));
        router.post('/guild/create', this.handle(this.routes.createGuild));

        return router;
    }

}

module.exports = Routing;
