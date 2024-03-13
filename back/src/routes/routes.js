const Express = require("express");
const router = Express();
const UserController = require("../controllers/UserController");
const SavedController = require("../controllers/SavedController");
const PostController = require("../controllers/PostController");
const WeatherController = require("../controllers/WeatherController");
const passport = require("passport");
const validator = require("../config/validator");
const AuthController = require("../controllers/AuthController");
const path = require('path');
const multer = require('multer');
const storage = require("../config/files");


const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
      return cb(new Error('Erro extensão não suportada!'), false);
    }
    cb(null, true);
  },
  limits: {
    fileSize: 2048 * 2048
  }
});

const allUploads = upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'file', maxCount: 4 }
]);

// Rotas para o user
router.post("/user", validator.validationUser("create"), validator.errorTreatment, UserController.create);
router.get("/user/:id", UserController.show);
router.get("/user", UserController.index);
router.delete("/user/:id", UserController.destroy);
router.put('/user/:id', validator.validationUser("update"), validator.errorTreatment, UserController.update);
router.put('/private/user',  UserController.authUpdate);

// Rotas para o saved
router.get('/private/myposts', SavedController.authIndex);
router.post('/private/myposts/:postId', SavedController.authSave);
router.delete('/private/myposts/:postId', SavedController.authRemove);



// Rotas para o post
router.post("/post", allUploads, validator.validationPost("create"), validator.errorTreatment, PostController.createWithFiles);
router.get("/post/:id", PostController.show);
router.get("/post", PostController.index);
router.delete("/post/:id", PostController.destroy);
router.put('/post/:id', validator.validationPost("update"), validator.errorTreatment, PostController.update);

// Rota de login 
router.use("/private", passport.authenticate('jwt', { session: false }));
router.post("/login", AuthController.login);
router.get("/private/getDetails", AuthController.getDetails);

router.get("/weather", WeatherController.getWeather);


module.exports = router;
