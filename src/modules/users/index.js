import { Router } from "express";
import UserController from "./users.controller";
import middlewares from "../../middlewares";

const { UserValidator } = middlewares;

const userRouter = Router();

userRouter.post(
  "/register",
  UserValidator.registrationInputs,
  UserController.createUser
);

/*
  --------------------------
  Bottom-up Swagger approach 
  --------------------------
*/

/**
 * @swagger
 * /register:
 *  post:
 *    summary: registers a new user
 *    tags:
 *      - User authentication
 *    parameters:
 *      - name: body
 *        in: body
 *        required: true
 *        type: string
 *        schema:
 *          type: object
 *          required:
 *            - username
 *            - email
 *            - password
 *            - country
 *            - city
 *          properties:
 *            username:
 *              type: string
 *            email:
 *              type: string
 *            password:
 *              type: string
 *            country:
 *              type: string
 *            city:
 *              type: string
 *    responses:
 *      201:
 *        description: activate account.
 *      400:
 *        description: something went wrong.
 */

userRouter.post(
  "/login",
  UserValidator.validateLoginCreds,
  UserController.signInUser
);

/**
 * @swagger
 * /login:
 *  post:
 *    summary: logs in a new user
 *    tags:
 *      - User authentication
 *    parameters:
 *      - name: body
 *        in: body
 *        required: true
 *        type: string
 *        schema:
 *          type: object
 *          required:
 *            - username
 *            - password
 *          properties:
 *            username:
 *              type: string
 *            password:
 *              type: string
 *    responses:
 *      200:
 *        description: successful login
 *      400:
 *        description: something went wrong.
 */

export default userRouter;
