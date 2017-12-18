module.exports = function parseTags(tags) {
    if (typeof tags === 'undefined') {
        return [];
    }
    return tags.L.map(i => i.S)
}
