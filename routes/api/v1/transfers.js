const express = require ("express");
const router = express.Router();
const transfersController = require("../../../controllers/api/v1/transfers");

router.post('/', transfersController.getAll);
router.get('/', transfersController.create);
router.get('/:id', transfersController.upload);
router.get('/', transfersController.status);

module.exports = router;

