import React from 'react'

import Container from 'react-bootstrap/Container';
import TeamCard from './components/TeamCard';
import Title from './components/Title';

export default function Team() {
    return (
        <Container>
            <Title
                title="El equipo de IGALARM"
                desc="Somos un equipo conformado por tres estudiantes de ingeniería con 
                el proposito de desarrollar un sistema para que la gente se sienta más 
                segura de sus pertenencias tanto fuera como dentro de sus hogares"
            />
            <div className="container-fluis d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <TeamCard
                            imgsrc=""
                            alt="Nadia"
                            nombre="Nadia Escobedo"
                            descripcion="Estudiante de ESCOM, fan de los perritos y practica Taekwondo"
                            boleta="2020630042"
                            telefono="5566374454"
                        />
                    </div>
                    <div className="col-md-4">
                        <TeamCard
                            imgsrc=""
                            alt="Ian"
                            nombre="Ian Sánchez"
                            descripcion="Estudiante de ESCOM, jugador de videojuegos y gusta de la comida típica mexicana"
                            boleta="2014090675"
                            telefono="554648233"
                        />
                    </div>
                    <div className="col-md-4">
                        <TeamCard
                            imgsrc=""
                            alt="Andrea"
                            nombre="Andrea Chavez"
                            descripcion="Estudiante de ESCOM"
                            boleta="2018631471"
                            telefono="5610595243"
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}
