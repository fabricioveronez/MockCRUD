const uuidv4 = require('uuid/v4');

var repo = new Map();

exports.insert = (collection, data) => {
        
    var insertedData = Object.assign(data, {id: uuidv4()});

    if (repo.has(collection)) {
        repo.set(collection, [...repo.get(collection), insertedData]);
    } else {
        repo.set(collection, [insertedData]);
    }

    return insertedData;
};

exports.get = (collection) => {
    return repo.get(collection);
};

exports.clear = (collection) => {
    repo.delete(collection);
};