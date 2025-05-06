import express from "express";
import { createUser } from "../controller/user.js";

export const userRouter = express.Router();

userRouter.post("/", createUser);
