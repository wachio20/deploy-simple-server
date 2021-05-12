
const express = require("express");

const app = express();

app.use(express.json());

app.use((req,res,next)=>{
  res.send("important information from my computer")
})
//heroku injects the port number into the PORT env value
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
  