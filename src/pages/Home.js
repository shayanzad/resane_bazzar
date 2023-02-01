import { useState, useEffect } from "react";

import MainPage from "../components/hoc/mainPage";
import HomeComponent from "../components/home";

const Home = () => {
  const [data, setData] = useState([]);

  return (
     
      <HomeComponent />
     
  );
};

export default Home;
