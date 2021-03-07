import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../assets/css/paradigmas.css";
import Logo from "../assets/images/icon-blog.png";

export default function Paradigmas() {
  return (
    <>
      <Header />
      <div className="container">
        <article className="article_principal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </article>
        <div className="container_paradigmas">
          <div className="first_content">
            <img src={Logo} />
          </div>
          <div className="second_content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book
          </div>
          <div className="third_content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book
          </div>
          <div className="fourth_content">
            <img src={Logo} />
          </div>
          <div className="first_content">
            <img src={Logo} />
          </div>
          <div className="second_content"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
