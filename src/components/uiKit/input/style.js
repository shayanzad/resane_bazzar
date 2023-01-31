import Styled from "styled-components";
import { Input } from "antd";

const StyledInput = Styled(Input)`
    
    border:none;
    box-shadow:none;
    padding: 0.75rem 1rem;
    border-radius: 1rem;
    background:var(--Mokh-White1);
    display: flex;
    align-items: center;
    color: var(--Mokh-Font3);
    font-size:1.125rem;
    border: 1px solid var(--gray11);
    input{
        width: 100%;
        display: flex;
        flex-direction:${(props) => (props.align === "rtl" ? "row" : "row-reverse")};
        direction:${(props) => props.align};
        text-align:${(props) => props.align === "ltr" ? "left" : "right" };
        font-size:1rem;
        background:var(--Mokh-White1);
        color: var(--Mokh-Font1);
        border-color: transparent !important;
        box-shadow: none !important;
        &::placeholder{
          text-align:right;
        }
    }
`;
export { StyledInput };
