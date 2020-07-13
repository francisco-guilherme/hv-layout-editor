import axios from "axios";

const fetchComponents = async () => {
  const components = await axios.get(`http://localhost:3000/api/v1/components`);
  return components.data;
};

const fetchComponent = async () => {
  return new Promise(resolve => {
    setTimeout(() => resolve("component"));
  });
};

export { fetchComponents, fetchComponent };
