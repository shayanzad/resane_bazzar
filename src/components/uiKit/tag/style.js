import Styled from "styled-components";
import { Tag } from "antd";

export const StyledTag = Styled(Tag)`
border-radius:10px;
margin-top:5px;
color: var(--purple10) ;
background: var(--gray3) ;
font-weight: ${(props)=>(props.fontWeight?props.fontWeight:'')};
   border:none;
&.ant-tag-success{
    color: var(--green10) !important;
    background: var(--green1) !important;
    border-color:  var(--green1) !important ;
}

&.ant-tag-purple{ 
    color: var(--purple10) !important;
    background: var(--purple1) !important;
    border-color:  var(--purple1) !important ;
}

&.ant-tag-magenta{
    color: var(--pink10) !important;
    background: var(--pink1) !important;
    border-color:  var(--pink1) !important ;
}
&.ant-tag-gold{
    color: var(--yellow10) !important;
    background: var(--yellow1) !important;
    border-color:  var(--yellow1) !important ;
} 
&.ant-tag-blue{
    color: var(--blue10) !important;
    background: var(--blue1) !important;
    border-color:  var(--blue1) !important ;
} 
`;
