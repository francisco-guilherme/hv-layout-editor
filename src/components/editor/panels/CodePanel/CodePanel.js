import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { HvButton } from "@hv/uikit-react-core/dist";
import { Download } from "@hv/uikit-react-icons";
import { generateCode, downloadCode } from "lib/utils/code";

const CodePanel = ({ classes, codePanelActive, pageComponents }) => {
  const [code, setCode] = useState("");

  useEffect(() => {
    const formatCode = async () => {
      const generatedCode = await generateCode(pageComponents);
      setCode(generatedCode);
    };

    formatCode();
  }, [pageComponents]);

  const handleDownload = () => {
    downloadCode("Page.jsx", code);
  };

  return (
    <div className={classes.root}>
      <div className={classes.code}>
        <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{
                ...style,
                ...{
                  position: "absolute",
                  width: "100%",
                  minHeight: "100%",
                  padding: "20px",
                  margin: 0
                }
              }}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
      <div className={classes.buttons}>
        <HvButton category="icon" onClick={handleDownload}>
          <Download />
        </HvButton>
      </div>
    </div>
  );
};

CodePanel.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  codePanelActive: PropTypes.bool.isRequired,
  pageComponents: PropTypes.instanceOf(Array).isRequired
};

export default CodePanel;
