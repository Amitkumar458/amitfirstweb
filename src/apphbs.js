const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const staticpath = path.join(__dirname , "../public");
const template = path.join(__dirname , "../templates/views");
const partialpath = path.join(__dirname , "../templates/partials");

var PORT = process.env.PORT || 3000;
// built in middleware
app.use(express.static(staticpath));
app.set("views" , template);
app.set("view engine" , "hbs");

hbs.registerPartials(partialpath);

app.get('/' , (req , res)=>{
   res.render("index.hbs")
})
app.get('/about' , (req , res)=>{
   res.render("about.hbs")
})
app.get('/address' , (req , res)=>{
   res.render("address.hbs")
})
app.get('/game' , (req , res)=>{
   res.render("game.hbs")
})
app.get('*' , (req , res)=>{
   res.render("404" , {
       errorwrite: "oops page is not found" ,
   });
});

app.listen( PORT , () => {
    console.log("server is listen at http://127.0.0.1:3000");
});
