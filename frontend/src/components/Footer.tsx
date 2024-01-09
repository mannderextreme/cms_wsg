import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <Container className="text-center text-md-start mt-5">
        <Row className="mt-3">
          <Col md={3} lg={4} xl={3} className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3"></i>WSG Jena-Lobeda
            </h6>
            <p>
              Wo Tischtennis ein Zuhause hat und Gemeinschaft groß geschrieben wird.
            </p>
          </Col>

          <Col md={3} lg={2} xl={2} className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              Über uns
            </h6>
            <p>
              <a href="../datenschutz.html" className="text-reset">Datenschutz</a>
            </p>
            <p>
              <a href="../impressum.html" className="text-reset">Impressum</a>
            </p>
          </Col>

          <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              Kontakt
            </h6>
            <p>
              <i className="fas fa-home me-3"></i>
              <a href="https://goo.gl/maps/KPb5ro1Kb9ak6bAc6" target="_blank" rel="noopener noreferrer" className="text-reset">Spiellokal Lobeda-West</a>
            </p>
            <p>
              <i className="fas fa-envelope me-3"></i>
              <a href="mailto:info@wsg-lobeda.de" className="text-reset">info@wsg-lobeda.de</a> 
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;