import express from "express";
import { adminLogin,userDetails,deleteUser,editUser,addUser } from "../controllers/adminController.js";

const router=express.Router();

router.post('/login',adminLogin);
router.get('/user',userDetails);
router.put('/edit-user/:id',editUser);
router.delete('/delete-user/:id',deleteUser);
router.post('/add-user',addUser)



export default router;