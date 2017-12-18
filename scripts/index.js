const removeContent = require('./removeContent');
const createBookmark = require('./createBookmark');
const config = require('../cache-config.js');
const path = require('path');
const getBookmarks = require('./getBookmarks');
const createIndex = require('./createIndex');
const parseTags = require('./parseTags');

removeContent()
    .then(() => {

        getBookmarks()
            .then((data) => {
                data.Items.forEach((element, index, array) => {
                    createBookmark(
                        path.resolve(config.paths.content, `${element.bookmark_id.S}.md`), {
                            title: `Bookmark`,
                            type: element.type.S,
                            content: element.content.S,
                            tags: parseTags(element.tags)
                        }
                    );
                });
                return data;
            })
            .then(createIndex)
            .catch(err => {
                console.log(`Error: `, err);
            });

    })
    .catch(err => {
        console.log(`Error: `, err);
    });
