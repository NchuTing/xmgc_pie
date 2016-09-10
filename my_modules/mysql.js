/**
 * Created by Administrator on 2016/9/9.
 */
var _mysql={};
//var mysql=require('mysql');
//var conn= mysql.createConnection({
//     host:'115.159.111.231',
//     port:3306,
//     user:'root1',
//     password:'19940812ZYh@',
//     database:'projectfactory'
// });
var conn=_mysql.conn=$mysql.createConnection({
    host:'115.159.111.231',
    port:3306,
    user:'root1',
    password:'19940812ZYh@',
    database:'projectfactory'
});
conn.connect(function(err){
    if(err){
        console.log('连接失败');
    }else console.log('连接成功');
});
//执行查询 测试是否连接成功
//var queryString='select * from user';
//conn.query(queryString,function(err,res){
//    console.log(res);
//});
conn.end();

module.exports=_mysql;