const { Router } = require("express");
const userDetailController = require("../controllers/userDetailController");

const { requireAuth } = require("../middleware/authMiddleware");

const router = Router();

router.post("/add-user", requireAuth, userDetailController.add_user);
router.post("/get-user", requireAuth, userDetailController.get_user);

module.exports = router;
