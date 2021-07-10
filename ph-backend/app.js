const express = require('express');
const app = express();

const PORT = 6000;

app.listen(PORT,() => {
    console.log('App listening on port ' + PORT)
})
app.get('/',(req,res) => {
    console.log(res)
    res.send('App working!');
})
