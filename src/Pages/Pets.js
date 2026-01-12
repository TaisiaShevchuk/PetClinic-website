import React, { Component } from 'react';
import { Nav, Container, Tab, Row, Col } from "react-bootstrap";
import p from '../Components/foto/p.jpg';
import d1 from '../Components/foto/d1.jpg';
import c1 from '../Components/foto/c1.jpg';

export default class Pets extends Component {
    render() {
        return(
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">sec</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fird">fird</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img
                        className="d-block w-100"
                        src= { p }
                        alt="Dog1"
                    />
                                    <p>ok</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img
                        className="d-block w-100"
                        src= { d1 }
                        alt="Dog1"
                    />
                                    <p>kk</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fird">
                                <img
                        className="d-block w-100"
                        src= { c1 }
                        alt="Dog1"
                    />
                                    <p>OK</p>
                                </Tab.Pane>                                
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}