const express = require('express');







// Create table reservation
app.post('/api/reservations', (req, res) => {
    const newReservation = req.body;
  
    reservations.push(newReservation);

    res.json(newReservation);
  });