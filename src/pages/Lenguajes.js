import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import data from "../assets/json/lenguajes.json";
import "../assets/css/lenguajes.css";
import { Row, Col } from "react-bootstrap";

export default function Lenguajes() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Lenguajes de Programación</h1>
        <article className="article_principal">
          Los lenguajes de programación son un mundo maravilloso para todo aquel
          que ame el desarrollo de software. Desde que empezamos en este camino
          de codificar hasta que dejamos de lado el código para tal vez dirigir
          una empresa siempre vamos a saber que cada uno de los lenguajes que
          aprendemos es un mundo totalmente diferente que nos brinda la facultad
          de poder realizar un sinfín de proyectos. Pienso, basado en la
          anterior premisa que cada lenguaje está ahí para ser utilizado de
          acuerdo con cada necesidad y que ningún lenguaje es mejor que otro,
          pero lo que es cierto es que unos lenguajes simplifican más la vida
          que otros.
        </article>
        <div className="container-lenguajes">
          {data.map((values) => (
            <Row>
              <Col md={values.sizeColImg} sm={12} className="content-img">
                <img
                  src={values.urlImagen}
                  style={{ width: "235px" }}
                  alt={values.nombre}
                />
              </Col>
              <Col md={values.sizeColText} sm={12} className="content-description">
                <div className="container-info">
                  <h5>{values.nombre}</h5>
                  {values.descripcion}
                </div>
              </Col>
            </Row>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
