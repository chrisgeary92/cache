const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

module.exports = function createBookmark (_path, data, content) {
    let fontmatter = `---\n${yaml.safeDump(data).trim()}\n---\n\n`;
    fs.writeFile(_path, `${fontmatter}${content || ''}\n`, (err) => {
        if (err) throw err;
        console.log(`Created: ${_path}`);
    })
};