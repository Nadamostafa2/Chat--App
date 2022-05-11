const express=require('express')
const app=new express();

app.set('views','Views')
app.use(express.static('Views'))

app.get('/',(req,res)=>{
    return res.render('index.html')
})



app.listen(5000,()=>{console.log("Listening.......")})