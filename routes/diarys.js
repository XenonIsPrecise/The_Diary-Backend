const express = require('express');
const router = express.Router();
const { getDiarys, getDiary, createDiary, updateDiary, deleteDiary, getSecret } = require('../controllers/diarys');


router.route('/secret').get(getSecret);
router.route('/').get(getDiarys).post(createDiary);
router.route('/:id').get(getDiary).put(updateDiary).delete(deleteDiary);



module.exports = router;
