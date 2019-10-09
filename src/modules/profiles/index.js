import { Router } from "express";
import ProfileController from "./profiles.controller";
import { appendToken } from "../../utils";
// import middlewares from '../../middlewares'

const profileRouter = Router();

profileRouter.post(
  "/profile",
  appendToken,
  ProfileController.modifyUserProfile
);

/**
 * @swagger
 * /profile:
 *  post:
 *    summary: creates user profile
 *    tags:
 *      - User profile
 *    parameters:
 *      - name: body
 *        in: body
 *        required: true
 *        type: string
 *        schema:
 *          type: object
 *          required:
 *            - bio
 *            - phone
 *            - gender
 *          properties:
 *            bio:
 *              type: string
 *            phone:
 *              type: string
 *            gender:
 *              type: string
 *    responses:
 *      201:
 *        description: create profile successful
 *      400:
 *        description: something went wrong.
 */

profileRouter.get("/profile", appendToken, ProfileController.loadUserDetails);

/**
 * @swagger
 * /profile:
 *  get:
 *    summary: get user profile
 *    tags:
 *      - User profile
 *    responses:
 *      200:
 *        description: response object containing user details
 *      403:
 *        description: no token provided
 */

export default profileRouter;
