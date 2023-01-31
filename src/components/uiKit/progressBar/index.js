//node modules
import React from "react";
import PropTypes from "prop-types";
//components

//utils

//styles
import { ProgressBar } from "./style";

const Progres = ({ dir, ...props }) => {
  return <ProgressBar showInfo={false} dir={dir} {...props} />;
};

Progres.propTypes = {
  props: PropTypes.any,
  dir: PropTypes.string,
};

export default Progres;
