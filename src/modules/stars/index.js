import { Router } from "express";
import StarsController from "./stars.controller";
import { appendToken } from "../../utils";

const starsRouter = Router();

starsRouter.post("/star", appendToken, StarsController.star);

/**
 * @swagger
 * /star?postId={id}:
 *  post:
 *    summary: stars user post
 *    tags:
 *      - Star post
 *    responses:
 *      201:
 *        description: post starred
 *      400:
 *        description: something went wrong.
 */

starsRouter.delete("/unstar", appendToken, StarsController.unstar);

/**
 * @swagger
 * /unstar?postId={id}:
 *  post:
 *    summary: unstar user post
 *    tags:
 *      - Star post
 *    responses:
 *      201:
 *        description: post unstarred
 *      400:
 *        description: something went wrong.
 */

export default starsRouter;
