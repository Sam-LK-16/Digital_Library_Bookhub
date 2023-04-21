import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Book Hub is a recently launched convenient platform which provides local communities in high growth markets with vibrant online Marketplaces. It is Consumer To Consumer ( C2C ) Concept. Book Hub Connects local people to buy and Sell Used Books through our Safe and Secure Website. What customers have to do is just to click on our site and then they can check out the updated information of new and Used Books and by just clicking they can get that on Highly Discounted Price in Comparison with other sites. </p>
            <p className='fs-17'>At Book Hub, we believe in making the world a better place: Book Hub improves people's lives by bringing them together for win-win exchanges. Sellers can easily earn some extra cash by simply posting the old books that are no longer of using them - thus, giving buyers the opportunity to find great value items at affordable price deals.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
