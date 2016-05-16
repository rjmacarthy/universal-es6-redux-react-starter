var glob = require('glob'),
    _ = require('lodash');

export default {
    port: 3050,
    routes: './src/server/routes/**/*.js',
    title : 'express api boilerplate es6',
    globFiles: function(location) {
        var files = glob.sync(location);
        var output = [];
        output = _.union(output, files);
        return output;
    }
}
