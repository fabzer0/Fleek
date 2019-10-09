import { Router } from "express";
import CommentsController from "./comments.controller";
import { appendToken } from "../../utils/auth";

const commentsRouter = Router();

commentsRouter.post("/comment", appendToken, CommentsController.makeComment);

/**
 * @swagger
 * /comment?postId={id}:
 *  post:
 *    summary: creates a comment
 *    tags:
 *      - Comments
 *    parameters:
 *      - name: body
 *        in: body
 *        required: true
 *        type: string
 *        schema:
 *          type: object
 *          required:
 *            - comment
 *          properties:
 *            comment:
 *              type: string
 *    responses:
 *      201:
 *        description: commented
 *      400:
 *        description: something went wrong.
 */

export default commentsRouter;
