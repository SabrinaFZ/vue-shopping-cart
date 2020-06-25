const express = require('express');
const apiMocker = require('connect-api-mocker');

const app = express();

app.use('/api', apiMocker('mocks/api'));

app.listen(3000, () => {
    console.log('Server is listening');
});
