class Guilds {
    constructor(db) {
        this.collection = db.collection('guilds')
    }

    create(params) {
        return new Promise(async (res, rej) => {
            try {
                const data = await this.collection.updateOne(
                    {
                        name: params.name,
                        server: params.server
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
      return new Promise(async (res, rej) => {
        const data = await this.collection.count();
        res(data)
      })
    }
}

module.exports = Guilds;