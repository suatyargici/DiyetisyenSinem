import React from "react";
import { Helmet } from "react-helmet";
import { Container } from "../components/Container";
import PriceList from "../components/PriceList";
import Slick from "../components/Slick";

const index = () => {
  return (
    <div>
      <Helmet>
        <title>Diyetisyen Sinem Tan</title>
      </Helmet>
      <Container>
        <Slick />
        <PriceList />
      </Container>
    </div>
  );
};

export default index;
