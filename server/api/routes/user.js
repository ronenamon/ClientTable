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
    
    })//find by id


    router.get('/user/email/:email' , function (reqmres) {
     
        User.find({'email': req.params.email}).exec()
        .then(docs => 
                   res.status(200).json(docs)
        ).catch(err =>
            res.status(500).json({
                message:'Error user not found',
                error:err
            })
        )
    
    })//find by email

    //POST
    router.post('/user' , function(req,res){
        let user = new User(req.body)
        user.save(function(err,user){
            if(err) return console.log(err)
            res.status(200).json(user)
        })
    })

    //update
    router.put('/user/:id',function(req,res){
        console.log(req.body)
        let qry = {_id: req.params.id}
        let doc = {
            first:req.body.firstName,
            last:req.body.lastName,
            email:req.body.email,
            password:req.body.password,
            isActive:req.body.isActive
        }
        
        console.log(doc);//test
        User.update(qry , doc,function(err,respRaw){
            if(err) return console.log(err);

            res.status(200).json(respRaw);
        })
    })




}