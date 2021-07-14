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
    email: 'ausbaxley@gmail',
    uniqueID: 'bax',
}];

app.use(express.json());

// --------- Routes --------- //

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/api/reservations', (req, res) => res.json(reservations));

app.get ('api/reservations/:reservation', (req, res) => {
    const chosen = req.params.reservation;

    console.log(reservation);

    for (let i = 0; i < reservations.length; i++) {
        if (chosen === reservations[i].routeName) {
            return res.json(reservations[i]);
        }
    }
});


// Create table reservation
app.post('/api/reservations', (req, res) => {
    const newReservation = req.body;
  
    reservations.push(newReservation);

    res.json(newReservation);

  });

// server starter
app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));