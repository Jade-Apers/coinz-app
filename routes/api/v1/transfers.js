const express = require ("express");
const router = express.Router();
const transfersController = require("../../../controllers/api/v1/transfers");

router.get('/', transfersController.getAll);
router.post('/', transfersController.create);
router.get('/:id', transfersController.upload);
router.get('/', transfersController.status);
router.get('/leaderboard', transfersController.getLeaderboard);

module.exports = router;

