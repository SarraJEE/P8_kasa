import React from "react";
import Banner from "../../components/Banner/Banner";
import imgHomeBanner from "../../assets/images/banner/homeBanner.png";
import Cards from "../../components/Cards/Cards";
const Home = () => {
  return (
    <div className="home">
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
        <Cards/>
      </main>
      
    </div>
  );
};

export default Home;
