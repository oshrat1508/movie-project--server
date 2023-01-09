const express  = require('express')
const cors = require('cors')
require("./config/config");

const movie_router =require('./router/movieRouter')
const users =require('./router/usersRouter')



const app = express()
app.use(cors())
app.use(express.json())


// app.get("/userr",(req,res)=>{
//     const q = "SELECT * FROM users"
//     db.query(q,(err,data)=>{
//         if(err) res.json(err)
//         res.json(data)
//     }) 
    
// })

// app.post("/userr",(req,res)=>{
//     const {name , email , password , username} = req.body
//     const q = "INSERT INTO users (`email`, `name`, `password`, `username`) VALUES (?)"
//     const value = [email , name , password , username]

//     db.query(q, [value] , (err,data)=>{
//         if(err) res.json(err)
//         res.json('BOOK HS CREATED')
//     }) 
    
// })


// app.delete("/userr/:id",(req,res)=>{
//     const q = "DELETE FROM users WHERE id = ?"
//     const {id} = req.params

//     db.query(q, [id] , (err,data)=>{
//         if(err) res.json(err)
//         res.json('BOOK HS deleted')
//     }) 
    
// })

// app.put("/userr/:id",(req,res)=>{
//     const {name , email , password , username} = req.body
//     const q = "UPDATE users SET `email` = ? , `name` = ? , `password` = ? , `username` = ? WHERE id = ?"
//     const {id} = req.params
//     const value = [email , name , password , username]
//     db.query(q, [...value , id] , (err,data)=>{
//         if(err) res.json(err)
//         res.json('BOOK HS update')
//     }) 
// })




app.use('/chilTime',movie_router)
app.use('/',users)

app.listen(8000 , ()=>console.log('listen to port 8000'))









// const axios = require('axios')

// const getData =async()=>{
// const {data} = await axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=698c26f192e68da611452c5592599ea2')
// console.log(data);
// }