const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/tonypham-profile-page'));
app.get('/*', function(req, res) {
    res.sendFile(path.joing(__dirname + '/dist/tonypham-profile-page/index.html'));
});
app.listen(process.env.port || 8080);