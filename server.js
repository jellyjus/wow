const express = require('express');
const bodyParser = require('body-parser');


class Server {
    constructor() {
        this.app = express();
        this.setup();
        this.initEnv();
        this.createServer();
    }

    setup() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(express.static(__dirname + '/frontend/dist'));
    }

    initEnv() {
        try {
            process.env.NODE_ENV = process.env.NODE_ENV? process.env.NODE_ENV : 'dev';
            console.log('Init env', process.env.NODE_ENV);

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

    createServer() {
        const port = process.env.PORT || 8080;
        this.server = require('http').createServer(this.app);
        this.server.listen(port, () =>
            console.log(`Start listening on localhost:${port}`)
        );
    }
}

module.exports = new Server;