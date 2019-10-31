// First, we import the http library from Node.js. This will allow us to use
// a few already made functions.
const http = require('http');

console.log('Starting the server...\nVisit 127.0.0.1:8080 in your browser.');

// Call the createServer function, and give it another function that will be
// executed whenever a request is made to the server.
http.createServer((request, response) => {
  
  // GET is used to request data.
  if (request.method === 'GET') {
    // We respond with a status code of 200 (OK), and we add a header that
    // tells the browser to expect HTML.
    response.writeHead(200, {'Content-Type': 'text/html'});
    // Then comes the actual content.
    response.write('<h1>Hello World!</h1>');
    response.end();
  }

  // Someone might be trying to create a new resource on the server by sending
  // data.
  if (request.method === 'POST') {

    // This is where plain Node.js gets messy. The data is not all ready yet.
    // It's coming in little by little.
    let data = []
    
    // Look, a piece of data! Let's add it to the buffer.
    request.on('data', chunk => {
      data.push(chunk);
    })
    
    // All done! We have all the data.
    request.on('end', () => {
      console.log('Received POST data:\n' + data);
      // Save data to database, etc.
    })

    // 201 means that something has been created on the server, like a new
    // entry in a database table.
    response.writeHead(201);
    response.end();
  }

}).listen(8080); // This tells the server what port it should listen to.
