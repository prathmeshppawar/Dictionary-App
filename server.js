const path = require('path')
const express = require('express')
var axios = require("axios");
const app = express()
const port = 3000
app.use(express.static(path.join(__dirname,"public")))

app.get('/', (req, res) => {
    return res.sendFile("/public/index.html", {root: __dirname})

})
app.get('/searchword', (req, res) => {

var options = {
  method: 'GET',
  url: `https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${req.query.entry}`,
  headers: {app_id: 'efcea167', app_key: '3f421f938e5815048bf557d96ae9b64d'}
};

axios.request(options).then(function (response) {
  res.send(response.data);
}).catch(function (error) {
  console.error(error);
});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})