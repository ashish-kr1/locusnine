const router = require('express').Router();
const controller = require('../controller/controller');
module.exports = () => {

    router.post('/addUser', controller.addUser);
    router.get('/getUsers', controller.getUsers);
    router.delete('/deleteUser/:id', controller.deleteUser);
    router.put('/updateUser', controller.updateUser);
    return router;

}