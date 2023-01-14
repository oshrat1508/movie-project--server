const express = require("express");
const controllers = require("../controllers/usersController");
const router = express.Router();
// http://localhost:8000/singup

router.put("/like/:movieid",controllers.like())
router.post("/singup", controllers.singUp());
router.post("/singupManeger", controllers.singUpManager());
router.post("/singin", controllers.singIn());
router.post("/forgot-password", controllers.forgotPassword());
router.get("/users/:id", controllers.getUserById());
router.put("/users/:id", controllers.updateUser());
router.delete("/users/:id", controllers.deleteUser());
router.get("/users", controllers.getAllUsers());
router.post("/facebooklogin", controllers.facebooklogin());
router.post("/googlelogin", controllers.googlelogin());

module.exports = router;
