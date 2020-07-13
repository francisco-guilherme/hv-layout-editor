import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { HvTypography } from "@hv/uikit-react-core";

const Message = ({ classes, message, status }) => (
  <div className={clsx(classes.root, classes[status])}>
    <HvTypography variant="normalText">{message[status]}</HvTypography>
  </div>
);

Message.propTypes = {
  /**
   * The classes object to be applied into the root object.
   */
  classes: PropTypes.shape({
    /**
     * Styles applied to root.
     */
    root: PropTypes.string.isRequired
  }).isRequired,
  /**
   * Message to display.
   */
  message: PropTypes.shape({}).isRequired,
  /**
   * Message status.
   */
  status: PropTypes.string.isRequired
};

export default Message;
