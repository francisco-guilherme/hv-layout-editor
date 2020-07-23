import { getComponents } from "lib/utils/components";

const fetchComponents = async () => {
  return new Promise(resolve => {
    const components = getComponents();
    setTimeout(() => resolve(components));
  });
};

const fetchComponent = async () => {
  return new Promise(resolve => {
    setTimeout(() => resolve("component"));
  });
};

export { fetchComponents, fetchComponent };
