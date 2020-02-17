import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

import { Link } from "react-router-dom";

const Home = props => {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="luxuriouse rooms"
          subtittle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </React.Fragment>
  );
};

export default Home;
