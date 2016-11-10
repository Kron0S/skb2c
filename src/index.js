import express from 'express'
import cors from 'cors';
import canonize from './canonize';

const app = express();
app.use(cors());
app.get('/', async (req, res) => {
	try {
		const username = req.query.username || false;
		if (!username) {return res.send('Invalid username');}
		const name = canonize(username);
		return res.send(name);
	} catch (err) {
		console.log(err);
		return res.send('Invalid username');
	}
});

app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});
