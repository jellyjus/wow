const MongoClient = require('mongodb').MongoClient;

class Db {
    constructor() {}

    async init() {
        this._db = await MongoClient.connect('mongodb://jellyjus:jus1234@ds113455.mlab.com:13455/wow');
        for (let key of this.collections) {
            const modelName = key.slice(0,1).toUpperCase() + key.slice(1);
            const model = require(`./models/${modelName}`);
            this[key] = new model(this._db);
        }

    }

    get collections() {
        return [
            'guilds'
        ]
    }
}
module.exports = Db;