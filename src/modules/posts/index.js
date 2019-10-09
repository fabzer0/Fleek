import { Router } from "express";
import PostsController from "./posts.controller";
import { appendToken } from "../../utils";

const postsRouter = Router();

postsRouter.post("/posts", appendToken, PostsController.createPost);

/**
 * @swagger
 * /posts:
 *  post:
 *    summary: creates post
 *    tags:
 *      - Posts
 *    parameters:
 *      - name: body
 *        in: body
 *        required: true
 *        type: string
 *        schema:
 *          type: object
 *          required:
 *            - video
 *          properties:
 *            video:
 *              type: string
 *    responses:
 *      201:
 *        description: create post successful
 *      400:
 *        description: something went wrong.
 */

postsRouter.delete("/posts", appendToken, PostsController.deletePost);

/**
 * @swagger
 * /posts/?postId={id}:
 *  delete:
 *    summary: deletes a specific post
 *    tags:
 *      - Posts
 *    query:
 *      - name: id
 *        in: path
 *        required: true
 *        description: id of post to be deleted
 *        type: number
 *    responses:
 *      200:
 *        description: Post successfully deleted
 *      404:
 *        description: Post does not exist
 */

export default postsRouter;
