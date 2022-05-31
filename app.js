const express   = require('express');
const app       = express();
app.use(express.static('public'));


app.listen(process.env.PORT || 3000, ()=>{
    console.log('server levantando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/registrar', (req,res)=>{
    res.sendFile(__dirname + '/views/registrar.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});