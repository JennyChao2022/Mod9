let express= require('express')
let router= express.Router()
let Controller= require('../Controller')

router.get('/',(req,res)=>{
    Controller.userController.getUsers(res);
})
router.post('/create',(req,res)=>{
    Controller.userController.createUser(req.body,res)
})

module.exports = router;
