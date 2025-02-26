import express from "express";
import { createServer } from 'node:http';

const App = express()

App.get('/user',(req,resp)=>{
  resp.json({message: "Welcome"})
})

const server = createServer(App).listen('8080',()=>{
  console.log('Server running on port 8080')})