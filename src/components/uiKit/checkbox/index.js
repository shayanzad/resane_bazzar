//node modules
import React from 'react';
import PropTypes from 'prop-types';

//components

//utils

//styles
import { StyledCheckbox } from './style';

 
const CustomCheckbox = props =>{

  const {href , children , loading} = props;

  return href ? 
  // with Link wrapper

    <a href={href} >
      <StyledCheckbox
        {...props}
        href={undefined}
      >
        {!loading && children}
      </StyledCheckbox>
    </a>
    :
    // without Link wrapper
    <StyledCheckbox
      {...props}
    >
      {!loading && children}
    </StyledCheckbox>;

};
 
CustomCheckbox.propTypes = {
  href: PropTypes.string,                  
  children: PropTypes.any,
  loading:PropTypes.bool,
};
 
export default CustomCheckbox;