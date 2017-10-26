class Get {
    constructor(db) {
        this.db = db;
    }

    async handle(task) {
        try {
            if (!this.checkParams(task))
                return;

            const res = await this.db.guilds.get(task.params);
            console.log(res);
            task.res.json(res)
        } catch (e) {
            task.res.json({err});
        }
    }

    checkParams(task) {
        for (let key of this.fields) {
            if (!task.params || !task.params[key]) {
                task.res.status(400).send(`No field "${key}" in params`);
                return false;
            }
        }
        return true
    }

    get fields() {
        return [
            'id'
        ]
    }
}

module.exports = Get;