import React from "react";
import PropTypes from "prop-types";

const Cards = ({cards}) => {
    return (
    <div className="row mt-4">
    <div className="col-12 col-md-3 gx-4">
        <div className="card border border-0">
            <div className="card-header border border-0 rounded-0 d-flex align-items-center justify-content-center fs-3 text-secondary"
                style={"height:200px; width:100%; background-color: lightgray;"}>{cards.cardHeader}</div>
            <div className="card-body  border px-0">
                <h5 className="card-title text-center fs-4 text text-dark">{cards.title}</h5>
                <p className="card-text text-center py-2 px-4"><small>{cards.description}</small></p>
            </div>
            <div className="card-footer border mb-5 d-flex justify-content-center">
              <a href={Cards.buttonURL} className="btn btn-primary">{cards.buttonLabel}</a>
            </div>
        </div>
    </div> 
    </div> 
    );
}

Cards.propTypes = {
cards: PropTypes.array.isRequired
};


export default Cards;

