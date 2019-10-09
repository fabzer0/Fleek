import { Router } from "express";
import VerificationController from "../emailVerification/verification.controller";

const verificationRouter = Router();

verificationRouter.get("/verify", VerificationController.verifyEmail);

export default verificationRouter;
