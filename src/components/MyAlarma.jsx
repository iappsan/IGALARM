import React from 'react'

export default function MyAlarma() {
    return (
        <div>
            <div className="container-fluid">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Alarma</th>
                            <th scope="col">Dirección Asociada</th>
                            <th scope="col">Email Asociado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{props.codProd}</td>
                            <td>{props.Addr}</td>
                            <td>{props.Email}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
