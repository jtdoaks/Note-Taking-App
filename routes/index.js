const express = require('express');
const app = express();
const htmlRoutes = require('./htmlRoutes')
const apiRoutes = require('./apiRoutes');


app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

const postNote = (review) =>
fetch('api/reviews', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(review),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Successful POST request:', data);

      emptyForm();
      return data;
    })
    .catch((error) => {
      console.error('Error in POST request:', error);
    });



module.exports = app;