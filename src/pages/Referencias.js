import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import data from '../assets/json/referencias.json';
import {ListGroup} from 'react-bootstrap';

function Referencias() {
    return (
        <>
          <Header />
          <div className="container"> 
              <h1>Referencias Bibliograficas y Webgraficas.</h1>
              <ListGroup variant="flush">
                {data.map((values) => (
                    <ListGroup.Item key={values.idReferencia} >{values.referencia}</ListGroup.Item>    
                ))}
              </ListGroup>
        </div> 
        <Footer /> 
        </>
    )
}

export default Referencias
