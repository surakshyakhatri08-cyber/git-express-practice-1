import express from 'express';
import { getAll, getById, remove, update, create } from '../controllers/user.controller.js';

const router = express.Router();

//CRUD users
//get all users data 
router.get("/", getAll);

//user get by id
router.get('/:id', getById);

//create users
router.post('/', create);

//update users
router.put('/:id', update);

//delete/ remove users 
router.delete('/:id', remove);

export default router;