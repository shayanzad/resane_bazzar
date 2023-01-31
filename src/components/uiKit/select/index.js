//node modules
import React from "react";
import PropTypes from "prop-types";
import { Select } from "antd";

//components

//utils

//styles
import {StyledSelectInput} from './style.js';

 
const { Option } = Select;

const SelectInput = (data) => {
  return (
    <StyledSelectInput>
      <Select defaultValue={data.defaultValue} >
        <Option value={data.options[0]}>{data.options[0]}</Option>
        <Option value={data.options[1]}>{data.options[1]}</Option>
      </Select>
    </StyledSelectInput>
  ); 
};

Select.propTypes = {
  data: PropTypes.any,
};

export default SelectInput;
