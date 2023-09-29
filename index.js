const express = require('express');
const app =express();
const port=3000;
app.set('view engine','ejs');

app.use('/',require('./router'));

app.listen(port,()=>{
    console.log(`Servidor Corriendo ${port}`);
})


