const path = './handlers';

const Routes = {
    index: require(path + '/Index'),
    createGuild: require(path + '/guilds/Create')
};

module.exports = Routes;