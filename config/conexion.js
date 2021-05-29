var mysql= require("mysql");
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'fiscalia'
});

con.connect(
    (err)=>{
        if(!err){
            console.log('Conexion establecida');
        }else{
            console.log('Error en la conexión');
        }
    }
);

module.exports=con;