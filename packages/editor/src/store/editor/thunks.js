import { fetchComponents } from "lib/api/components";
import { addComponents } from "./actions";

const getComponents = () => async dispatch => {
  try {
    const components = await fetchComponents();
    dispatch(addComponents(components));
  } catch (error) {
    console.log("error: ", error);
  }
};

export { getComponents };
