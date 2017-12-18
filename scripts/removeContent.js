const del = require('del');
const config = require('../cache-config');

module.exports = function removeContent () {
    return del([`${config.paths.content}/*`, config.paths.searchIndex]);
};
