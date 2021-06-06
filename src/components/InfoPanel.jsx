import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/COl';

const InfoPanel = props => {
    return (
        <Container>
            <Row>
                <Col>
                <h1 clsssName="display-4">Hello, world!</h1>
                <p clsssName="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr clsssName="my-4" />
                <p>It uses utility clsssNamees for typography and spacing to space content out within the larger container.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default InfoPanel;
