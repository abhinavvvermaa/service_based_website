const express = require('express');
const router = express.Router();
const Request = require('../models/request');

router.post('/', async (req, res) => {
  const data = await Request.create(req.body);
  res.status(201).json(data);
});

router.get('/', async (req, res) => {
  const requests = await Request.find();
  res.json(requests);
});

module.exports = router;
