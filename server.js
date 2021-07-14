// dependencies
const express = require('express');

// setting up express app

const app = express();
const PORT = 8080;

// creating reservations array
const reservations = [{
    reservationName: 'testRes',
    name: 'Austin',
    phone: '8675309',
    email: 'ausbaxley@gmail'
    uniqueID: 'bax',
}],

// Create table reservation
app.post('/api/reservations', (req, res) => {
    const newReservation = req.body;
  
    reservations.push(newReservation);

    res.json(newReservation);

  });

// server starter
app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));