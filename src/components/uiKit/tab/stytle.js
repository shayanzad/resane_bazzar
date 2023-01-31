import Styled from 'styled-components';
import { Tabs } from 'antd';
 
const StyledTab = Styled(Tabs)`
    margin:2rem  0;
    max-width: max-content;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: unset;
.ant-tabs-nav-wrap{
    background: var(--Gajino-Gray1);
    border-radius: 20rem;
    padding: 1rem;
    max-width:var(--min-width);
}

.ant-tabs-nav-list{
    display: flex;
    align-items: center;
    justify-content: center;
    .ant-tabs-tab{
        margin: 0;
        min-width: 140px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        position: relative;
        z-index: 10;
        color: var(--Gajino-Font1);
        &:hover{
            *{
                color:var(--Gajino-Font1);
            }
        }
        &.ant-tabs-tab-active{
            *{
                color:var(--Gajino-white1);
            }

        }

    }
    .ant-tabs-ink-bar{
        height: 100%;
        border-radius: 20rem;
        position: absolute;
        z-index: 5;
        background:var(--Gajino-Font1);
    }
}

`;
 
export {StyledTab};