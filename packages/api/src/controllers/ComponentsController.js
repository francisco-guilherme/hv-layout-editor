const fs = require("fs-extra");
const reactDocs = require("react-docgen");

const PATH = "./node_modules/@hv/uikit-react-core/src/";

const getComponentDoc = path => {
  const src = fs.readFileSync(path);
  const doc = reactDocs.parse(src);

  return doc;
};

const filterComponents = async path => {
  const files = await fs.readdir(path);

  const filtered = await files.reduce(async (acc, name) => {
    const components = await acc;
    const stat = await fs.stat(path + name);

    const isComponent = stat.isDirectory() && /^[A-Z]/.test(name);
    const componentPath = `${path}${name}/${name}.js`;
    const hasRootComponent = fs.existsSync(componentPath);

    return isComponent && hasRootComponent
      ? components.concat({
          name,
          doc: getComponentDoc(componentPath),
        })
      : components;
  }, []);

  return filtered;
};

const getComponents = async (req, res, next) => {
  try {
    const components = await filterComponents(PATH);
    res.status(200).json(components);
  } catch (err) {
    console.log("err: ", err);
    res.json(err);
  }
};

module.exports = {
  getComponents,
};
