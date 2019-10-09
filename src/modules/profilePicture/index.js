import { Router } from "express";
import ProfilePictureController from "./profilePicture.controller";
import { appendToken } from "../../utils";

const profilePictureRouter = Router();

profilePictureRouter.post(
  "/fileUpload",
  appendToken,
  ProfilePictureController.modifyUserProfilePicture
);

/**
 * @swagger
 * /fileUpload:
 *  post:
 *    summary: uploads profile picture
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
 *            - avatar
 *          properties:
 *            avatar:
 *              type: string
 *    responses:
 *      201:
 *        description: file uploaded successfully
 *      400:
 *        description: something went wrong.
 */

export default profilePictureRouter;
