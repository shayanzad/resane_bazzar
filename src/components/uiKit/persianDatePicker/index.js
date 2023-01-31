//node modules
import React from "react";
import PropTypes from "prop-types";
import { DatePicker, ConfigProvider } from "antd";
import dayjs from "dayjs";
import {
  DatePicker as DatePickerJalali,
  Calendar,
  JalaliLocaleListener,
  useJalaliLocaleListener,
} from "antd-jalali";
import fa_IR from "antd/lib/locale/fa_IR";
// import "antd/dist/antd.css";

//components

//utils

//styles
import { StyledCustomDatePicker } from "./style";

const CustomPerianDatePicker = ({ setDate, faDate }) => {
  dayjs.calendar("jalali");
  const date = dayjs(faDate?faDate:'1380-01-01', { jalali: true });
    
  return (
    <StyledCustomDatePicker>
  
      <ConfigProvider locale={fa_IR} direction="rtl">
        <DatePickerJalali
          className="datePicker"
          onChange={setDate}
          defaultValue={date}
        />
      </ConfigProvider>
    </StyledCustomDatePicker>
  );
};

CustomPerianDatePicker.propTypes = {
  data: PropTypes.any,
};

export default CustomPerianDatePicker;
