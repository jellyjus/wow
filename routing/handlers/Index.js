class Index {
    constructor(db) {
        this.db = db;
    }

    async handle(task) {
        console.log('auth:', task.req.auth);
        task.res.sendFile(appRoot + '/frontend/dist/index.html');
    }
}

module.exports = Index;