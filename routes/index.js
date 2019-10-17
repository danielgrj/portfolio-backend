const router = require('express').Router();
const { sendMail } = require('./../controllers');

router.post('/mail', sendMail);

module.exports = router;
