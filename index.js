import express from 'express';
import router from './router.js';
const app = express()
app.use(express.urlencoded({extended:true}));
app.use(express.json());

console.log("Server running")
app.listen(3000)
router(app);