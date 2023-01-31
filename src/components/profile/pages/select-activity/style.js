import styled from "styled-components";

export const StyledContainer = styled.div`
// background:#fff;
.progressBox{
    width:100%;
    display: flex;
    flex-direction: column;

}
.tags{

    &.active{
        background:var(--purple10);
        color:#fff;
    }
    font-size: 16px;
    padding:8px;
    margin:10px;
    cursor:pointer;
    -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}
.tagsBox{
    padding: 22px 32px;
    background:#fff;
    margin-top:20px ;
    border-radius:11px;

}
 p{
    text-align: end;
    margin:0px;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 150%;
    color:var(--gray6)
}
.nextBox{
    width:50%;
    margin-right: auto;
    display: flex;
    align-items: flex-start;
    justify-content: end;
    margin-top:50px;
    

}
@media only screen and (min-width: 769px) and (max-width: 1024px)  {
 
}
@media only screen and (min-width: 481px) and (max-width: 768px)  {
 
    .nextBox{
        width:65%;
       
        
    
    }

}
@media only screen and (min-width: 0px) and (max-width: 480px)  {
    .nextBox{
        width:100%;
       
        
    
    }

}
`;
