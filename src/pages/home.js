import React from "react";
import Header from "../components/Header";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../assets/css/home.css";
import Footer from "../components/Footer";
import data from '../assets/json/home.json';

function home() { 
  return (
    <>
      <Header />
      <div className="container">
        <p></p>
        <article className="article_principal">
          Este blog está orientado a conocer según la opinión del autor y con
          base en la investigación realizada los paradigmas de programación que
          a diario utilizamos y como estos son una de las bases para poder hacer
          que nuestro proyecto tenga una calidad óptima según se requiera.<br /><br />
          También vamos a ver y conocer algunos lenguajes de programación según
          su tipo y como estos aplican algunos de los paradigmas más utilizados.
          Teniendo como premisa y pilar del blog la calidad y como llegamos a
          ella mediante la utilización correcta y acertada de estos paradigmas y
          otros aspectos como el diseño y la arquitectura de software para
          llegar a un buen software. Porque como dicen por ahí: “No es lo mismo
          software, que un buen software”.
        </article>
      </div>
      <Container className="container_cards">
        <Row>
          {data.map((values) => (
              <Col md={4} sm={12} style={{marginBottom: '25px'}} >
              <Card key={values.idCard} style={{ height: '100%' }} >
                <Card.Img variant="top" src={values.urlImagen} className="img-card-home" />
                <Card.Body>
                  <Card.Title>{values.name}</Card.Title>
                  <Card.Text>
                    {values.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default home;
