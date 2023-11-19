const express  = require('express');

const router = express.Router();

const {Employee} = require('../model/employee')

//get all employee

router.get('/employees',async (req,res)=>{
  const data =  await Employee.find({}).exec();
    res.send(data);
    
})
//save data
router.post('/employeesdata',(req,res)=>{
    const emp = new Employee({
        name:req.body.name,
        email:req.body.email,
        salary:req.body.salary
    })
    emp.save().then(
           console.log("post")
    )
})
//single data

router.get('/employees/:email',async (req,res)=>{
    const sdata  = await Employee.find({email:req.params.email});
    res.send(sdata);
})
router.put('/employees/:email',async (req,res)=>{
    const emp = {
        name:req.body.name,
        email:req.body.email,
        salary:req.body.salary
    }
  await   Employee.findOneAndUpdate({email:req.params.email},{ $set:emp } , {new:true})
    .then( (err,doc)=>{
        if(!err){
            console.log(doc + "error update");
        }else{
            console.log(err)
        }
    })
   
})

router.delete('/employee/delete/:email',(req,res)=>{
    Employee.findOneAndDelete({email:req.params.email})
    .then(console.log("delete"+ req.params.email))
    .catch((err)=>{console.log(err + "delet") });
})

module.exports = router;