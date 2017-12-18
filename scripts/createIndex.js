const fs = require('fs');
const path = require('path');
const config = require('../cache-config.js');

module.exports = function createIndex (data) {
    let content = data.Items.map(item => ({ id: item.bookmark_id.S, type: item.type.S, content: item.content.S }));
    fs.writeFile(config.paths.searchIndex, JSON.stringify(content), (err) => {
        if (err) throw err;
        console.log(`Created: ${config.paths.searchIndex}`);
    })
};