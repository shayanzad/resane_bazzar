import Styled from "styled-components";
import { Progress } from "antd";

export const ProgressBar = Styled(Progress)`
    direction: ${(props) => (props.dir ? props.dir : "ltr")};
    & .ant-progress-inner{
    border-radius:2rem;
     border:1rem var(--Gajino-White2) solid;
        background-color:var(--Gajino-Gray1);
        border-radius:2rem
    }
    & .ant-progress-bg{
        background-color:var(--Gajino-Green);
        border-radius:2rem
    }
`;
