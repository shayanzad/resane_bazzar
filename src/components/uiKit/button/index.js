//node modules
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";


//components

//utils

//styles
import { StyledButton } from './style';

 
const CustomButton = props =>{
  const isLoading = useSelector((state) => state.loading.isLoading);

  const {href , children , loading ,hasLoading} = props;
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
        color:"var(--gray2)"
      }}
      spin
    />
  );
  return href ? 
  // with Link wrapper

    <a href={href} >
      <StyledButton
        {...props}
        href={undefined}
      >
        {!loading && children}
      </StyledButton>
    </a>
    :
    // without Link wrapper
    <StyledButton
      {...props}
    >
      {(isLoading&&hasLoading)?  <Spin indicator={antIcon} />: children}
    </StyledButton>;

};
 
CustomButton.propTypes = {
  href: PropTypes.string,                  
  children: PropTypes.any,
  loading:PropTypes.bool,
};
 
export default CustomButton;