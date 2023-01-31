//node modules
import React from 'react';
import PropTypes from 'prop-types';


//components

//utils

//styles
import { StyledCustomDatePicker } from './style';

const CustomDatePicker = (props) =>{
  return(
    <StyledCustomDatePicker 
      calendarStyles={{
        dayPickerContainer:"dayPickerContainer",
        calendarContainer:"calendarContainer",
        next:"next",
        prev:"prev",
        heading:"heading",
        title:"title",
        monthsList:"monthsList",
        monthWrapper:"monthWrapper",
        selected:"selected",
        dayWrapper:"dayWrapper",
        currentMonth:"currentMonth",
        daysOfWeek:"daysOfWeek"
      }}
      className="ant-input ant-input-rtl"
      {...props}
    />
  );
};
 
CustomDatePicker.propTypes = {
  data: PropTypes.any
};
 
export default CustomDatePicker;