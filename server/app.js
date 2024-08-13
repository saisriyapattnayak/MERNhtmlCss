let express = require("express");
let cors = require("cors");
let app = express();
let mongoose = require("mongoose");
const usersform = require("./model");//colln name 
app.use(cors());
app.use(express.json());


mongoose
  .connect(`mongodb://localhost:27017/userFormData`)//userFormData:database name
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("err");
  });



app.post("/formData", (req, res) => {
  res.send(req.body);
  let data = new usersform(req.body);
  data
    .save()
    .then(() => {
      console.log("saved");
      console.log(req.body);
      
    })
    .catch((err) => {
      console.log(err);
    });
});



app.post("/login",(req,res)=>{
   let {name,pass}=req.body
   usersform.findOne({email:name}).then((x)=>{
    if(x){
       if(x.email==name){
        console.log("Already Registered User");
      
       }else{
        console.log("Not A User");
       }
    }else{
      console.log("Not A User");
    }
   })
   res.send(req.body)
})


app.get("/users",(req,res)=>{
  usersform.find()
  .then((data)=>{res.send(data)})
  .catch(()=>{console.log("err");})
})


app.get("/users/:id",(req,res)=>{
// console.log(req.params.id)
usersform.findOne({_id:req.params.id})
  .then((data)=>{res.send(data)})
  .catch(()=>{console.log("err");})
})

app.put("/users/:id",(req,res)=>{
  // console.log("requested");
  usersform.updateOne({_id:req.params.id},req.body)
  .then(()=>{res.send({"message":"update database"})})
  .catch(()=>{console.log("err");})
})

app.delete("/users/:id", (req, res) => {
  usersform.deleteOne({ _id: req.params.id }, req.body)
    .then(() => {
      res.send({ message: "deleted" });
    })
    .catch(() => {
      console.log("err");
    });
});


app.listen(5000, () => {
  console.log("server started at 5000");
});
