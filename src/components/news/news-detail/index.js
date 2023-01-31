import { StyledContainer } from './style';
import ClockIcon from "../../svg/icons/clock";
import CalenderIcon from '../../svg/icons/calender';
import { Tag } from "../../uiKit";
const NewsDetail = ({ itemData }) => {
    return (
        <StyledContainer>
            <div className="footerBox">
                <div>
                    {itemData.tags.map((item) => {
                        return (
                            
                            <Tag className="tags" color="purple">{item}</Tag>)
                    })}
                </div>
                <div className='child2'>
                    <div className="sub">
                        <CalenderIcon className="icon" />
                        <span>{itemData.date}</span>
                    </div>
                    <div className="sub">
                        <ClockIcon className="icon" />
                        <span>{itemData.minute} دقیقه</span>
                    </div>
                </div>
            </div>
        </StyledContainer>
    )
}

export default NewsDetail;