var mysql = require('mysql');
var util = require('util');
var config = require('../config/config.json');

var pool  = mysql.createPool(config.mysql);
const pool_query = util.promisify(pool.query).bind(pool);


module.exports = {
    load: (sql) => pool_query(sql),
    add: (entity, tableName) =>
      pool_query(`insert into ${tableName} set ?`, entity),
    del: (condition, tableName) =>
      pool_query(`delete from ${tableName} where ?`, condition),
    patch: (entity, condition, tableName) =>
      pool_query(`update ${tableName} set ? where ?`, [entity, condition]),
  };
  

// //code test thooi
// const users = db.load('select * from users');
// users.then(function(rows){
//   console.log(rows);
// })
// users.catch(function(rows){
//   console.error(rows);
// })
