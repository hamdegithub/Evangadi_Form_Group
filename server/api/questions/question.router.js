const router = require('express').Router();

const { CreateQuestion } = require('./question.controller');

//route new Question to be registered using createQuestion controller
router.post("/", CreateQuestion);


module.exports = router;