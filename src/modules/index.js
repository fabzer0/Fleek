import swaggerUi from "swagger-ui-express";
import apiSpec from "./apiSpec";
import userRouter from "./users";
import verificationRouter from "./emailVerification";
import profileRouter from "./profiles";
import postsRouter from "./posts";
import profilePictureRouter from "./profilePicture";
import starsRouter from "./stars";
import commentsRouter from "./comments";
import replyCommentRouter from "./commentReplies";
import followerRouter from "./followers";

const apiPrefix = "/api/v1";
const apiDocsOptions = {
  customSiteTitle: "xTrolly API Documentation",
  customCss: ".swagger-ui .topbar { display: none }"
};

const routes = app => {
  app.use(apiPrefix, userRouter);
  app.use(apiPrefix, verificationRouter);
  app.use(apiPrefix, profileRouter);
  app.use(apiPrefix, postsRouter);
  app.use(apiPrefix, profilePictureRouter);
  app.use(apiPrefix, starsRouter);
  app.use(apiPrefix, commentsRouter);
  app.use(apiPrefix, replyCommentRouter);
  app.use(apiPrefix, followerRouter);
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(apiSpec, apiDocsOptions)
  );

  return app;
};

export default routes;
