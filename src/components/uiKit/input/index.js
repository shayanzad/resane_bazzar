//node modules
import React from "react";
import PropTypes from "prop-types";

//components

//utils

//styles
import { StyledInput } from "./style";

const CustomInput = props => {
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
      <StyledInput {...rests } suffix={suffixLable} prefix={label}  align={RtlGnarator()} />
    </>
  );
};

CustomInput.propTypes = {
  label: PropTypes.any,
  suffixLable: PropTypes.any,
  inputType: PropTypes.string
};

export default CustomInput;
