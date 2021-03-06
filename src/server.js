'use strict';

const express = require('express');
const app = express(); //singleton: single instance on purpose

const PORT = process.env.PORT || 3002

app.get ('/', (req, res) => {
    res.status(200).send('Hello. This is a basic cloud server.');
});

app.get('/hello', (req, res) => {
    res.status(200).send('Hello there.');
})

function start() {
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = {
    app,
    start
};
