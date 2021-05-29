const express = require ("express");
const router = express.Router();
const transfersController = require("../../../controllers/api/v1/transfers");

router.get('/', transfersController.getAll);  //router add a coin to your database
router.post('/', transfersController.create); //router post to create a coin 
router.get('/:id', transfersController.upload); //router get details of one transfer
router.get('/', transfersController.status);
router.get('/leaderboard', transfersController.getLeaderboard);

module.exports = router;

