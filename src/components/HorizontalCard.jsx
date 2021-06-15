import React from 'react'

const HorizontalCard = (props) =>  {
    return (
        <div className="card mb-3" style={{maxWidth: '540px', margin: 'auto'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.source} className="img-fluid img-thumbnail" alt=""></img> 
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <p className="card-text"><a href={props.link} className="text-muted">Da click aquí</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalCard;
