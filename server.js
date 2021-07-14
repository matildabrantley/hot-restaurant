const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

// --------- Routes --------- //
app.get('/', (req, res) => res.send('Does this even work tho?'));

app.get('/api/reservations', (req, res) => res.json(characters));

app.get ('api/reservations/:reservation', (req, res) => {
    const chosen = req.params.reservation;

    console.log(reservation);

    for (let i = 0; i < reservations.length; i++) {
        if (chosen === reservations[i].routeName) {
            return res.json(reservations[i]);
        }
    }
});