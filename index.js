const server = require('./server');

const PORT = process.env.PORT || 4190;

server.listen(PORT, () => {
    console.log(`creeping on port ${PORT} :)`)
})