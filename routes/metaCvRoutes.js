const { Router } = require("express");
const metaCvController = require("../controllers/metaCvController");

const { requireAuth } = require("../middleware/authMiddleware");

const router = Router();

router.post("/add-meta-user", requireAuth, metaCvController.add_user);
router.post("/get-meta-users", requireAuth, metaCvController.get_users);

module.exports = router;
