const rimraf = require('rimraf');
const exec = require("child_process").exec;

class Runner {
    constructor() {
        this.buildFrontend();
    }

    buildFrontend() {
        rimraf('./frontend/dist', () => {
            exec('cd frontend && npm install --dev && npm run build', (err, stdout, stderr) => {
                if(err)
                    return console.log(err, stderr)

                console.log(stdout);
                console.log('Frontend build successfully!')

                const Server = require('./server');
            })
        });
    }
}

module.exports = new Runner;