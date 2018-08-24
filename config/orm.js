
const connection = require("./connection.js");



//functions to build queries
QuestionMarks = (num) => {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push('?');
	}
	return arr.toString();
}


 objToSql = (ob) => {
	const arr = [];
	for ( key in ob) {
		if (ob.hasOwnProperty(key)) {
			arr.push(key + '=' + ob[key]);
		}
	}
	return arr.toString();
}


// Create the ORM
const orm = {
	
	selectAll: (tableInput, cb) => {
		
		//build query  
		const queryString = 'SELECT * FROM ' + tableInput + ';';
		
		//connect and run query
		connection.query(queryString, (err, result) => {
			if (err) throw err;
			cb(result);
		});
	},


	

	updateOne: (table, objColVals, condition, cb) => {
		//build query 
		let queryString = 'UPDATE ' + table;
			queryString += ' SET ';
			queryString += objToSql(objColVals);
			queryString += ' WHERE ';
			queryString += condition;

			console.log(queryString);

		//connect and run query
		connection.query(queryString, (err, result) => {
			if (err) throw err;
			cb(result);
		});
    },
    
    

};

module.exports = orm;