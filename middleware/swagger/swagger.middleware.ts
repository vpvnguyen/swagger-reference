import { Router } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { swaggerDefinition, swaggerUiOptions } from "./swagger.config";

const swaggerMiddleware: Router = Router();

const swaggerOptions = {
  swaggerDefinition,
  apis: ["./api/*/*.ts"], // relative to where swagger is setup
};

const swaggerApiSpec = swaggerJsdoc(swaggerOptions);
const swaggerServe = swaggerUi.serve;
const swaggerSetup = swaggerUi.setup(swaggerApiSpec, swaggerUiOptions);

swaggerMiddleware.use(swaggerServe, swaggerSetup);

export default swaggerMiddleware;
