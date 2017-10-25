class Get {
  constructor(db) {
    this.db = db;
  }

  async handle(task) {
    try {
      if (!this.checkParams(task))
        return;

      const res = await this.db.guilds.get();
      console.log(res);
      task.res.json(task.params)
    } catch(e) {

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