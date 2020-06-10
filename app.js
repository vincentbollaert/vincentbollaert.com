const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
	res.send('hello world');
});

app.get('/custom', (req, res) => {
	res.set('x-custom-header', 'xxx');
	res.status(418); // i am a teapot
	res.send('blahdiblah');
});

app.listen(port, () => console.log(`app listening on port ${port}`));
