const express = require("express");
let router = express.Router();
const axios = require('axios');
const url = require('url');
const getKey = require("../utility/getSSM")

let giphyKey = '';
getKey.then((secret) => {
    console.log( secret )
    giphyKey = secret;
});

// GET JSON FROM GIPHY API
router.get("/", async (req, res) => {
    const query = url.parse(req.url, true).query;
    console.log(query.query);
    const options = {
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&q=${query.query}&limit=5&offset=0&rating=g&lang=en`,
    }

    axios.request(options).then((response) => {
        res.json(response.data);
    }).catch((error) => {
        console.log(error);
    })

});

module.exports = router;