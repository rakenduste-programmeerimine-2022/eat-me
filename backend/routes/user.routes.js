// const { authJwt } = require("../middleware/authJwt");
// const controller = require("../controllers/userController");
//
// module.exports = function(app) {
//
//     app.get("/api/test/all", controller.allAccess);
//
//     app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);
//
//     app.get(
//         "/api/test/mod",
//         [authJwt.verifyToken, authJwt.isModerator],
//         controller.moderatorBoard
//     );
//
//     app.get(
//         "/api/test/admin",
//         [authJwt.verifyToken, authJwt.isAdmin],
//         controller.adminBoard
//     );
// };