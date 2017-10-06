const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

class Server {
    constructor() {
        this.app = express();
        this.init();
    }

    async init() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));

        this.initEnv();
        await this.initDb();
        this.initRouting();
        this.createServer();
    }

    initEnv() {
        try {
            process.env.NODE_ENV = process.env.NODE_ENV? process.env.NODE_ENV : 'dev';
            console.log('Init env:', process.env.NODE_ENV);

            //if (process.env.NODE_ENV == 'dev')
                //this.createDevSettings();
        } catch (err) {
            console.log("Error when initialized env", {err});
            process.exit();
        }
    }

    createDevSettings() {
        const webpack = require('webpack');
        const webpackConfig = require('./webpack.config');
        const webpackDevMiddleware = require('webpack-dev-middleware');
        const webpackHotMiddleware = require('webpack-hot-middleware');
        const compiler = webpack(webpackConfig);

        this.app.use(webpackDevMiddleware(
            compiler, {
                noInfo: true,
                publicPath: webpackConfig.output.publicPath
            })
        );
        this.app.use(webpackHotMiddleware(compiler, {
            log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
        }));
    }

    async initDb() {
        const Db = require('./db/Db');
        this.db = new Db();
        await this.db.init();
    }

    initRouting() {
        try {
            const Routing = require('./routing/Routing');
            const routingManager = new Routing(this.db);

            this.app.use(routingManager.createRouteHandlers(express));

            this.app.use(express.static('frontend/dist'));
            this.app.use(express.static('static'));
        } catch (err) {
            console.log('Error when init routes', err);
            process.exit();
        }
    }

    createServer() {
        const port = process.env.PORT || 8088;
        this.server = require('http').createServer(this.app);
        this.server.listen(port, () => {
            this.writePID();
            console.log(`Start listening on localhost:${port}`)
        });
    }

    writePID() {
        fs.writeFileSync('server_pid.txt', process.pid);
        console.log('Server PID:', process.pid)
    }
}

module.exports = new Server;