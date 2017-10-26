const Utils = require(appRoot + '/utils');

class Guilds {
    constructor(db) {
        this.collection = db.collection('guilds')
    }

    create(params) {
        return new Promise(async (res, rej) => {
            try {
                const id = await this.collection.count();
                const data = await this.collection.updateOne(
                    {
                        name: params.name,
                        server: params.server,
                        id
                    },
                    {
                        $setOnInsert: {
                            name: params.name,
                            server: params.server
                        }
                    },
                    { upsert: true });
                res({data: data.upsertedCount})
            }
            catch (e) {
                 res({err: 'Error on create guild prepare params'});
            }
        })
    }

    get(params) {
        return this.collection.findOne({id: +params.id}, {fields:{_id:0}});
    }
}

module.exports = Guilds;