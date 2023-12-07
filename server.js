const express = require('express');
const app = express();
const dbconfing = require('./db')
const roomsRoute =  require('./routes/roomsRoutes');

app.use(`/api/rooms`,roomsRoute);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running at ${port}`));

