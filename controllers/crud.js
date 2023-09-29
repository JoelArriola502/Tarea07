const conexion = require('../database/db');

exports.save = (req,res)=>{
    const Nombre = req.body.Nombre;
    const img = req.body.img;
    const Director = req.body.Director;
   conexion.query('insert into pelicula set ?',{Nombre:Nombre,img:img,Director:Director},(error,results)=>{
    if(error){
        console.log(error);

    }else{
        res.redirect('/');
    }
   })
}