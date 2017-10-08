class Index {
    constructor(db) {
        this.db = db;
    }

    async handle(task) {
        console.log(task.req.cookies)
        task.res.sendFile(appRoot + '/frontend/dist/index.html');
    }
}

module.exports = Index;