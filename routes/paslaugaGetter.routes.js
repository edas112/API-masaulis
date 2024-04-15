const { Router } = require('express');

const { getAllPaslaugos } = require('../controllers');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const data = await getAllPaslaugos(req.body);
    res.json(data);
  } catch (error) {
    console.log('error', error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
