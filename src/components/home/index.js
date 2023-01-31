import React from 'react';
import Slid from "./slide"
import FindProjects from "./find-projects"
import CreateProjects from "./create-project"
import Features from "./features"
import Categories from './categories';
import Samples from './samples';
import Freelancers from './freelancers';
import News from './news';
import {StyledContainer} from './style'

function Home(props) {
    return (
        <StyledContainer>
            <Slid/>
            <Features />
            <Categories />
            <FindProjects />
            <Samples />
            <CreateProjects/>
            <Freelancers />
            <News />

        </StyledContainer>
    );
}

export default Home;