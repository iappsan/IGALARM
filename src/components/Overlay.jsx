import React from 'react'

const Overlay = (props) =>  {
    return (
        <div style={{maxWidth: '540px', margin: 'auto'}}>
            <img src={props.source} className="img-fluid img-thumbnail" alt=""></img> 
            <div className="card-img-top">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Overlay;