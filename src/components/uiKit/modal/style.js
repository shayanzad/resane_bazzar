import Styled from "styled-components";
import { Modal } from "antd";

const StyledModal = Styled(Modal)`
    border-radius: 1rem;
    overflow: hidden;
    padding: 0;
    width:36rem !important;

    .ant-modal-content{
        padding: 2.5rem;
    }
    .ant-modal-header{
        padding:1rem;
        border: none;
        .ant-modal-title{
            color:var(--Mokh-Blue);
            font-weight: bold;
            font-size: 1.5rem;
        }
        svg{
            width: 100%;
            height: auto;
        }
    }
    .ant-modal-body{
        padding:0;
    }
    .ant-modal-footer{
        display: flex;
        justify-content: ${modalProps=>modalProps.isConfirmDelete ?'space-evenly':'flex-end'};
        flex-direction:${modalProps=>modalProps.isConfirmDelete ?'row':'row-reverse'} ;
        border: none;
        margin:auto;
        width:100%;
        & > .single-button{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
        }
        .ant-btn{
            margin:${modalProps=>modalProps.isConfirmDelete ?'0 !important':'auto 1rem'} ;
            border:none;
            display: flex;
            justify-content: center;
            align-items: center;
            background:var(--Mokh-Font2);
            color:var(--pure-white);
            cursor:pointer;
            position:relative;
            border-radius:1rem;
            padding: ${({isDeleteModal}) => isDeleteModal ? "0.75rem 3rem" : "0.75rem 1.5rem"};
            font-size:1.125rem;
            height:auto;
            width:max-content !important;
            span{
                display:block;
            }
            &::before{
                content:"";
                display:block;
                position:absolute;
                top:50%;
                left:50%;
                right:auto !important ;
                bottom:auto !important;
                width:0 ;
                height:0 ;
                border-radius:1rem;
                z-index:1;
                border:none !important;
                transition:0.6s all;
                background: rgb(100 100 100 / 10%);
                opacity:1;
                box-shadow: none;
                animation: none;
            }
            &::after{
                content:"";
                display:block;
                position:absolute;
                top:50%;
                left:50%;
                border:none !important;
                right:auto !important ;
                bottom:auto !important;
                width:0;
                height:0;
                border-radius:1rem;
                z-index:2;
                transition:0.6s all;
                background: rgb(100 100 100 / 10%);
                opacity:1;
                box-shadow: none;
                animation: none;
            }
            &:hover{
                &::before{
                    border:none !important;
                    top:0;
                    left:0;
                    width:100%;
                    height:100%;
                }
            }
            &:active{
                &::after{
                    border:none !important;
                    top:0;
                    left:0;
                    width:100%;
                    height:100%;
                }
            }
            &.ant-btn-primary{
                background:var(--Mokh-Blue);
                color:var(--pure-white);
                margin-right:-1rem;
            }
        }
    }
@media (max-width: 768px) {
    width:295px !important;
    .ant-modal-footer{
        align-items: center;
        flex-direction: column-reverse;
        .ant-btn{
            margin-top:2rem;
            &.ant-btn-primary{
                margin-top:0;
            }
        }
    }
}
`;

export { StyledModal };
