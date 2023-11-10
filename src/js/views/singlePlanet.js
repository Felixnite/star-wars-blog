import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanets = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    useEffect(() => {
        actions.getSinglePlanet(params.theid)
    }, [])
    return (
        <div className="container">

            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        {params.theid == 1 ?
                            <img src={"https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"} className="img-fluid rounded-start" alt="Planets Picture" /> :
                            <img src={"https://starwars-visualguide.com/assets/img/planets/" + params.theid + ".jpg"} className="img-fluid rounded-start" alt="..." />}
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{store.planet.name}</h5>
                            <p className="card-text">climate: {store.planet.climate}</p>
                            <p className="card-text">diameter: {store.planet.diameter}</p>
                            <p className="card-text">gravity: {store.planet.gravity}</p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

SinglePlanets.propTypes = {
    match: PropTypes.object
};