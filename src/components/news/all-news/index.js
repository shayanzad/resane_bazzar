import React from 'react';
import SingleNew from './single-new/index'
import { Link } from "react-router-dom";
import { StyledContainer } from './style'
function AllNews({newsList}) {
    return (
        <StyledContainer>
            <div className='allNewsList'>
                {newsList.map((newsd) => (
                    <div key={newsd} className="newsItem">
                        <Link to={`/news/${newsd.id}`}>
                        <SingleNew  news={newsd}/>
                        </Link>
                    </div>
                ))}
            </div>
        </StyledContainer>
    );
}

export default AllNews;