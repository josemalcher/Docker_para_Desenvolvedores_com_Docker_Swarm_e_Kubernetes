const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('Olá minha imagen 2!');
})

app.listen(port, ()=>{
    console.log(`executando na post: ${port}`);
})