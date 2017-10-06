class Task {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    get params() {
        if (this.req.method === 'GET')
            return this.req.query;

        return this.req.body;
    }
}

module.exports = Task;