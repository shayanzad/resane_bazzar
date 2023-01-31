import { StyledContainer } from './style'
import QuickIcon from '../../../svg/icons/quick-link'
const QuickLink = ({ links }) => {
    return (
        <StyledContainer>
            <div className='quickLink'>
                
                <p>لینک های سریع</p>
                {links.map((item) => {
                    return (
                        <div className='linkText'>
                            <QuickIcon />
                            <span  >{item.title}</span>
                        </div>
                    )
                })}
            </div>
        </StyledContainer>
    )
}
export default QuickLink;