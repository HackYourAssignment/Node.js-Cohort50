/**
 * Exercise 3: Create an HTTP web server
 */

const http = require('http');
const fs = require('fs').promises;

let server = http.createServer(async (req, res) => {
	try {
		if (req.url === '/') {
		  const html = await fs.readFile('index.html', 'utf8');
		  res.setHeader('Content-Type', 'text/html');
		  res.write(html);
		} else if (req.url === '/index.js') {
		  const js = await fs.readFile('index.js', 'utf8');
		  res.setHeader('Content-Type', 'application/javascript');
		  res.write(js);
		} else {
		  res.statusCode = 404;
		  res.write('File not found');
		}
	} catch (err) {
		res.statusCode = 500;
		res.write('Internal Server Error');
	}
	res.end();
});

server.listen(3000, () => {
	console.log('Server running at http://localhost:3000');
});
