const express       = require('express');
const app           = express();

const PORT          = 8080;

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.listen(PORT, () => {
    console.log("work", PORT)
})