class Create {
    constructor(db) {
        this.db = db;
    }

    async handle(task) {
        try {
            if (!this.checkParams(task))
                return;

            const res = await this.db.guilds.create(task.params);
            if (res.err) {
                console.log('ERROR:', res);
                return task.res.json(res);
            }

            if (!res.data)
                return task.res.json({err: 'Guild already exists'});

            task.res.json(res);
        }
        catch (err) {
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
            'name',
            'server'
        ]
    }
}

module.exports = Create;