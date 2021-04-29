# swagger-reference

Experimental sandbox for Swagger API

src: https://blog.logrocket.com/documenting-your-express-api-with-swagger/

## Configs

- Add search bar

```javascript
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));
```

## Multi File Example

- https://github.com/mohsen1/multi-file-swagger-example

## Issues

- ES Modules type error issues with swagger versions over 6
