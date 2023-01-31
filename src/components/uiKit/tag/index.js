//node modules
import React from 'react';
import PropTypes from 'prop-types';

//components

//utils

//styles
import { StyledTag } from './style';

 
const CustomTag = props =>{

  const {href , children , loading} = props;

  return href ? 
  // with Link wrapper

    <a href={href} >
      <StyledTag
        {...props}
        href={undefined}
      >
        {!loading && children}
      </StyledTag>
    </a>
    :
    // without Link wrapper
    <StyledTag
      {...props}
    >
      {!loading && children}
    </StyledTag>;

};
 
CustomTag.propTypes = {
  href: PropTypes.string,                  
  children: PropTypes.any,
  loading:PropTypes.bool,
};
 
export default CustomTag;