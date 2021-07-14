// dependencies
const express = require('express');

// setting up express app

const app = express();
const PORT = 8080;

// server starter
app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));


// Create table reservation
app.post('/api/reservations', (req, res) => {
    const newReservation = req.body;
  
    reservations.push(newReservation);

    res.json(newReservation);
  });
