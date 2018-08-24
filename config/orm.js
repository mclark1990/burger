
var connection = require("./connection.js");

const orm = {
    all: (tableInput, cb) => {
        connection.query('SELECT * FROM '+tableInput+';', (err, result) => {
            if(err) throw err;
            cb(result)
        })
    }
}