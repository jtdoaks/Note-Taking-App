const router = require('express').Router();
const htmlRoutes = require('./htmlRoutes');
const apiRoutes = require('./apiRoutes');


router.use('/api', apiRoutes)
router.use('/', htmlRoutes)

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



module.exports = router;