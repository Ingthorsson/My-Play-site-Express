const express = require("express");
const app = express();
const path = require('path');
const giphyRoute =  require("./routes/giphy")

const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// SERVE OUT REACT CONTENT
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use("/gifs", giphyRoute);

// LISTEN AT PORT = PORT
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});