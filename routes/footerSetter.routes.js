const { Router } = require('express');

const { postInfoFooter } = require('../controllers');

const { updateFooter } = require('../controllers');

const router = Router();

router.post('/', async (req, res) => {
  try {
    const data = await postInfoFooter(req.body);
    res.status(201).json(data);
  } catch (error) {
    console.log('error', error.message);
    res.status(400).json({ error: error.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const data = await updateFooter(req.params.id, req.body);
    res.status(200).json(data);
  } catch (error) {
    console.log('error', error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
