const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from the server!');
  });


app.listen(9000, function () {
    console.log('app is working')
})