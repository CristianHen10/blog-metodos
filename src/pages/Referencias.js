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
              <h1>Referencias Webgraficas.</h1>
              <ListGroup variant="flush">
                {data.map((values) => (
                    <ListGroup.Item key={values.idReferencia} >{values.referencia}</ListGroup.Item>    
                ))}
              </ListGroup>
        </div> 
        <footer className="footer" style={{position: 'absolute'}}>
            <div className="container container_footer">
                <div>
                    Universidad Iberoamericana 2021.
                </div>
                <div>
                    Cristian Alberto Henao
                </div>
            </div>
        </footer>
        </>
    )
}

export default Referencias
