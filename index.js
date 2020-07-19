const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
});

const port = porcess.env.port || 3000;
app.listen(port, () =>{
    console.log("Hello World");
});