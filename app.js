const express = require('express');
const app = express();
app.use(express.static('./quick-pay-dist'));

const port = 3002;

app.listen(port, err => {
  console.log('Listening at http://localhost:' + port);
});