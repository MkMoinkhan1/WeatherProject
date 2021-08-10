const express = require("express")
const path = require("path");
const app = express();
const hbs = require("hbs");
port = 3000;

const launch = path.join(__dirname , '../resources');
const templatesPath = path.join(__dirname ,'../templates/views');
const partialsPath = path.join(__dirname ,'../templates/partials');
app.use(express.static(launch)); //absolute relative 


app.set("view engine","hbs");
app.set("views", templatesPath);
hbs.registerPartials(partialsPath);



app.get("/",(req , res)=>{
    res.render("index")
});

app.get("/weather" , (req , res)=>{
  res.render("weather");
})
app.get("/weather/*",(req ,res) =>{
  res.render("404",{
    errorcomemnt: "opps weather page couldn't be found"
  });
});
app.get("/Contect/*",(req ,res) =>{
  res.render("404",{
    errorcomemnt: "opps contect page couldn't be found"
  });
});
app.get("/about/*",(req ,res) =>{
  res.render("404",{
    errorcomemnt: "opps about page couldn't be found"
  });
});

app.get("*",(req , res)=>{
  res.render("404", {
    errorcomemnt: "opps page couldn't be found",
  });
});

app.listen(port , ()=>{
    console.log(`listing the port ${port}`)
});

