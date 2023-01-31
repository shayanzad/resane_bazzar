import { StyledContainer } from './style'
import image1 from '../../../../assets/images/news/image1.png'
import NewsDetail from '../../news-detail/index'
const HeaderInfo = ({ newsInfo }) => {
    return (
        <StyledContainer>
            <div className='newsInfoImage'>
                <img src={image1} />
            </div>
            <div className="newsInfoText">
                <div className='keyWords'>
                    {newsInfo.keyWords.map((item) => {
                        return (
                            <span >{`#` + item}</span>
                        )
                    })}
                </div>
                <h2>{newsInfo.title}</h2>
                <NewsDetail itemData={newsInfo} />
            </div>
        </StyledContainer>
    )
}
export default HeaderInfo;