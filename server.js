var express = require('express');
var app = express();

const port = process.env.PORT || "8000";

var cors = require('cors');
app.use(cors({ optionSuccessStatus: 200 }));  // some legacy browsers choke on 204

app.use(express.static(__dirname));


app.get("/", function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", function (req, res) {
    res.json({ greeting: 'Who am i boy' });
});

app.listen(port, () => {
    console.log(`Your app is listening on http://localhost:${port}`);
});