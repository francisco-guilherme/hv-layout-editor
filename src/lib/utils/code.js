const formatCode = async code => {
  const prettier = await import("prettier/standalone");
  const parserBabel = await import("prettier/parser-babel");

  return prettier.format(code, {
    parser: "babel",
    plugins: [parserBabel]
  });
};

export const generateCode = async components => {
  const imports = components.map(component => `Hv${component.name}\n`);
  const declared = components.map(component => `<Hv${component.name} />\n`);

  const code = `import React from 'react';
    import {
        HvProvider, 
        ${imports}
    } from "@hv/uikit-react-core";
    
    const App = () => (
      <HvProvider>
        ${declared.join("")}
      </HvProvider>
    );
    
    export default App;`;

  return await formatCode(code);
};

export const downloadCode = (filename, text) => {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
};
