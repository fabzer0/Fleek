import { Router } from "express";
import FollowersController from "./followers.controller";
import { appendToken } from "../../utils/auth";

const followerRouter = Router();

followerRouter.post("/follow", appendToken, FollowersController.follow);

/**
 * @swagger
 * /follow?followId={id}:
 *  post:
 *    summary: follows another user
 *    tags:
 *      - Followers
 *    responses:
 *      201:
 *        description: now following
 *      400:
 *        description: something went wrong.
 */

followerRouter.delete("/unfollow", appendToken, FollowersController.unfollow);

/**
 * @swagger
 * /unfollow?followId={id}:
 *  post:
 *    summary: unfollows another user
 *    tags:
 *      - Followers
 *    responses:
 *      201:
 *        description: unfollowed user
 *      400:
 *        description: something went wrong.
 */

export default followerRouter;
