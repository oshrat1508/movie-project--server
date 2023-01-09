const express = require("express");
const controllers = require("../controllers/usersController");
const router = express.Router();
// http://localhost:8000/singup

router.post("/singup", controllers.singUp());
router.post("/singupManeger", controllers.singUpManager());
router.post("/singin", controllers.singIn());
router.post("/forgot-password", controllers.forgotPassword());
router.get("/user/:id", controllers.getUserById());
router.put("/user/:id", controllers.updateUser());
router.delete("/user/:id", controllers.deleteUser());
router.get("/user", controllers.getAllUsers());

router.post("/facebooklogin", controllers.facebooklogin());
router.post("/googlelogin", controllers.googlelogin());

module.exports = router;
