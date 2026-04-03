const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Hello Bhai Server Chal Raha Hai 🚀");
    res.end();
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
//jhffhjkhfiudhfjdshfdshfkjhdsf