import React from "react";
import PropTypes from "prop-types";

// row component
function Row(props) {
  const { cols } = props;
  return <div className="row">{cols}</div>;
}

Row.propTypes = {
  cols: PropTypes.array,
};

export default Row;
