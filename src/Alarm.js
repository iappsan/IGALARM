import React from 'react'

import Container from 'react-bootstrap/Container';
import Title from './components/Title';
import Overlay from './components/Overlay';


import am1 from './img/Alarma/arduino.png';
import am2 from './img/Alarma/buzzer.png';
import am3 from './img/Alarma/sensor.png';

export default function Alarm() {
    return (
        <Container>
            <Title
                title="El diseño de nuestra alarma"
                desc="Nuestra alarma está desarrollada con base en el
                sistema de arduino, un sistema de altavoces y sensores
                necesarios para brindarte la seguridad que necesitas"
            />
             <Overlay  
                title="Arduino"
                text="Nuestra alarma esta diseñada con una placa arduino,
                que no es mas que un circuito integrado programable."
                source={am1}
            />
            <Overlay className={{margin: 'right'}}
                title="Sensor de proximidad"
                text="Con la ayuda de un sensor de proximidad detectaremos 
                objetos o señales que se encuentren cerca del elemento sensor"
                source={am3}
            />
            <Overlay className={{margin: ''}}
                title="Altavoz"
                text="Aunado a ello, se cuenta con un altavoz que una vez detectado 
                algun objeto ajeno y la alarma este activa, este sonará para alertar 
                a los vecinos y/o autoridades "
                source={am2}
            />
            
        </Container>
    )
}
