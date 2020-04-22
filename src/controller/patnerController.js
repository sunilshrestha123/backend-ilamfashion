const express = require('express');
const router=express();
router.post('/',(req,res,next)=>{
console.log('patner',req.body);
patnerService.addPartner(req.body)
.then(Partner=>{
    console.log(partner)
    req.status(200).send({partner});

})
})
