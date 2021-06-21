import React from 'react'

export default function MyAlarma(props) {
    return (
        <div>
            <div className="container-fluid">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Número de alarma</th>
                            <th scope="col">Dirección Asociada</th>
                            <th scope="col">Contraseña de alarma</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.codProd}</td>
                            <td>{props.addr}</td>
                            <td>{props.pass}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
