import express from 'express';
import post_controller from '../controller/post_controller.js';
const router =express.Router();
router.get('/animal' , post_controller)
export default router