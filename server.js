const express = require('express');
const userRouter = require('./src/user/router');
const app =  express();
const port =3001;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/user',userRouter)

app.listen(port,() =>{
    console.log(`Server running at http://localhost:${port}/`)
})