const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const exec = require("child_process").exec;
const app = express();


const port = process.env.PORT|| 8085;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/', (req, res) => {
    const pid = fs.readFileSync('server_pid.txt', 'utf8');
    exec(`kill ${pid} && git pull && c9 exec run`, (err, stdout, stderr) => {
        if (err) {
            return console.log(err, stderr)
        }
    });
    res.end('ok')
});

app.get('/', (req,res) => {
    res.end('ok')
});

const server = require('http').createServer(app);
server.listen(port, () =>
    console.log(`Start listening on localhost:${port}`)
);