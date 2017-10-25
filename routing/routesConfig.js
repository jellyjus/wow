const path = './handlers';

const Routes = {
    index: require(path + '/Index'),
    createGuild: require(path + '/guilds/Create'),
    getGuild: require(path + '/guilds/Get')
};

module.exports = Routes;