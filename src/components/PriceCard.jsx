import React from 'react'

import Card from 'react-bootstrap/Card';


export default function PriceCard(props) {
    return (
        <Card className="card overflow" style={{ width: '18rem' }}>
            <div class="card  text-white">
                <Card.Img variant="top" src={props.image} />
            </div>
            <Card.Body style={{ textAlign: 'center' }}>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
            <Card.Body class="d-grid gap-2 d-md-flex mx-auto">
                
                <p>
                    <a class="btn btn-primary" 
                    data-bs-toggle="collapse" 
                    href={props.reference} 
                    role="button" 
                    aria-expanded="false" 
                    aria-controls={props.id}>Ver paquete</a>
                </p>
                <div class="row"> 
                    <div class="col">
                        <div class="collapse multi-collapse" id={props.id}>
                            <div class="card card-body">
                                <table class="table">
                                    <thead >
                                        <tr>
                                            <th scope="col">Descripcion</th>
                                            <th scope="col">Cantidad</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">{props.descripcion1}</th>
                                            <td>{props.cantidad1}</td></tr>
                                        <tr>
                                            <th scope="row">{props.descripcion2}</th>
                                            <td>{props.cantidad2}</td></tr>
                                        <tr>
                                            <th scope="row">{props.descripcion3}</th>
                                            <td>{props.cantidad3}</td></tr>
                                        <tr>
                                            <th scope="row">{props.descripcion4}</th>
                                            <td>{props.cantidad4}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h6> {props.descripcion5} </h6>
                                <br/>
                                <center>
                                <h6> {props.precio} </h6> 
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </Card.Body >
        </Card >

    )
}
