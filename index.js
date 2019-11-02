const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

// The '/' means that we are defining what happens when a GET request is
// made to the base URL. In our case, the base URL would be http://localhost:3000/
app.get('/', (request, response) => response.send('<h1>Hello World!</h1>'))

app.post('/', (request, response) => {
	console.log(request.body)

	// Do something with the data...

	// Then send a response to the client
	response.status(201).send('Data saved!');

	// There are many useful functions in the Express API
	// The functions allow you to find out more about the request (the IP it
	// came from, the method (GET, POST, etc.), and so on)
	// http://expressjs.com/en/4x/api.html#req
})

app.listen(port, () => console.log(`Starting the server on port ${port}!`))
