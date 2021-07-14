// dependencies
const express = require('express');

// setting up express app

const app = express();
const PORT = 8080;

// server starter
app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));