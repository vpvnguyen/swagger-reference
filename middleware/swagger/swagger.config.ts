export const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "TITLE",
    version: "VERSION 0.1.0",
    description:
      "This is a simple CRUD API application made with Express and documented with Swagger",
    license: {
      name: "MIT",
      url: "https://spdx.org/licenses/MIT.html",
    },
    contact: {
      name: "Swagger Reference",
      url:
        "https://dev.to/kabartolo/how-to-document-an-express-api-with-swagger-ui-and-jsdoc-50do",
      email: "info@email.com",
    },
  },
  servers: [
    {
      url: "http://localhost:5000",
    },
  ],
};

export const swaggerUiOptions = { explorer: true };
