const fs = require("fs");
const path = require("path");
const YAML = require("js-yaml");
const JsonRefs = require("json-refs");
const swaggerUi = require("swagger-ui-express");
const swaggerRouter = require("swagger-express-router");

const config = app => {
  const controllers = getControllers();

  getSwaggerSpecs()
    .then(swaggerSpecs => {
      swaggerRouter.setUpRoutes(controllers, app, swaggerSpecs, true);
      app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
    })
    .catch(err => console.log(err));
};

const getSwaggerSpecs = () => {
  const refsPath = path.resolve(__dirname, "../swagger/index.yaml");
  const unresolvedDefinitions = YAML.safeLoad(
    fs.readFileSync(refsPath, "utf8")
  );

  return JsonRefs.resolveRefs(unresolvedDefinitions, {
    location: refsPath,
    loaderOptions: {
      processContent: function(res, callback) {
        callback(undefined, YAML.safeLoad(res.text));
      }
    }
  }).then(results => results.resolved);
};

const getControllers = () => {
  const controllers = {};

  fs.readdirSync(path.resolve(__dirname, "../controllers"))
    .filter(file => file.indexOf(".js") > -1)
    .forEach(file => {
      const ext = path.extname(file);
      const controller = path.basename(file, ext);

      controllers[controller] = require(path.resolve(
        __dirname,
        `../controllers/${file}`
      ));
    });

  return controllers;
};

module.exports = { config };
