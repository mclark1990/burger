const orm = require('../config/orm.js');

const burger = {
    selectAll: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res)
        })
    },

    updateOne: (id, cb) =>{
        orm.updateOne('burgers', id , cb)
    }
}

module.exports = burger;