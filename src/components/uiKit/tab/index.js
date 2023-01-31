//node modules
import React from 'react';
import PropTypes from 'prop-types';

//components

//utils

//styles
import {StyledTab} from './stytle';


const CustomTab = ({children}) =>{
  return(
    <StyledTab >
      {children}
    </StyledTab>
  );
};
 
CustomTab.propTypes = {
  children: PropTypes.any
};
 
export default CustomTab;