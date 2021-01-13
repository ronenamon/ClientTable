const User = require('../../models/user')


module.exports = function(router){

    router.get('/user/:id' , function (reqmres) {
     
        User.findById(req.params.id).exec()
        .then(docs => 
                   res.status(200).json(docs)
        ).catch(err =>
            res.status(500).json({
                message:'Error user not found',
                error:err
            })
        )
    })


}