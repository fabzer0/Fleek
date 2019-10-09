import { Router } from "express";
import CommentRepliesController from "./commentReplies.controller";
import { appendToken } from "../../utils/auth";

const replyCommentRouter = Router();

replyCommentRouter.post(
  "/replyComment",
  appendToken,
  CommentRepliesController.replyToComment
);

/**
 * @swagger
 * /replyComment?commentId={id}:
 *  post:
 *    summary: replies on a comment
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

export default replyCommentRouter;
