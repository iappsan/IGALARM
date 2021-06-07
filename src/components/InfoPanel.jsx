import React from 'react'
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const InfoPanel = props => {
    return (
        <Container>
            <Jumbotron fluid>
                <br/>
                <h1>{props.tittle}</h1>
                <p clsssName="lead">{props.description}</p>
                <hr clsssName="my-4" />
            </Jumbotron>
        </Container>
    );
}

export default InfoPanel;
