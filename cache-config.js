const path = require('path');

module.exports = {
    paths: {
        content: path.resolve(__dirname, `./www/content`),
        searchIndex: path.resolve(__dirname, `./www/static/search.json`) 
    }
};
