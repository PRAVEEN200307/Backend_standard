import express from "express";
import AuthRouter from './authRoutes/authRoutes.js'

const Router = express.Router();

Router.use('/auth', AuthRouter);

export default Router;
