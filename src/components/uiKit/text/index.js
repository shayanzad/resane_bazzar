//node modules
import React from "react";
import PropTypes from "prop-types";

//components

//utils

//styles
import { StyledTextArea } from "./style";

const CustomTextArea = props => {
  const { inputType, suffixLable, label, ...rests } = props;

  const RtlGnarator = () => {
    switch (inputType) {
    case "mobile":
      return "ltr";
    default:
      return "rtl";
    }
  };
  return (
    <>      
      <StyledTextArea {...rests } suffix={suffixLable} prefix={label}  align={RtlGnarator()} />
    </>
  );
};

CustomTextArea.propTypes = {
  label: PropTypes.any,
  suffixLable: PropTypes.any,
  inputType: PropTypes.string
};

export default CustomTextArea;
