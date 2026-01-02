const express = require("express")
const controller = require("./controller")

const router = express.Router()

router.post("/user", controller.createUser);
router.get("/user", controller.getUsers);
router.get("/user/:id", controller.getUser);
router.delete("/user/:id", controller.deleteUser);

module.exports = router