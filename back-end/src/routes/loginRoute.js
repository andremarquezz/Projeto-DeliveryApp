const { Router } = require('express');
const loginController = require('../controllers/userController');

const router = Router();
router.get('/usersalles', loginController.getUserSalles)
router.post('/', loginController.login);

module.exports = router;
