import express from 'express';
const server = express();
server.get('/',(req,res)=>{
  res.send("hello from backend to frontend");
  
});
server.use(express.json());
server.post('/weather',(req,res)=>{
  
  const {cityName} = req.body;
  res.send(`relieved by ${cityName}`)
})
server.listen(3000);
