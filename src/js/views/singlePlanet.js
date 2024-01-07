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

            <div className="card mb-3" style={{ maxWidth: "1400px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        {params.theid == 1 ?
                            <img src={"https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"} className="img-fluid rounded-start" alt="Planets Picture" /> :
                            <img src={"https://starwars-visualguide.com/assets/img/planets/" + params.theid + ".jpg"} className="img-fluid rounded-start" alt="..." />}
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{store.planet.name}</h5>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus quis tellus facilisis sodales. Aliquam viverra tempor gravida. Phasellus eu mattis ipsum. Integer suscipit consectetur tortor sed placerat. Etiam convallis viverra luctus. Duis mauris nisl, cursus laoreet viverra sed, congue sit amet orci. Nullam diam elit, semper eu posuere in, semper sed ligula. Aliquam nec eros in dui consequat rhoncus ac a massa. Fusce ac dolor sapien. Integer rutrum ut eros sit amet sollicitudin. Fusce dictum risus risus, aliquam fermentum magna ultricies et. Proin lobortis ante nec luctus faucibus. Phasellus eu efficitur augue. Sed volutpat laoreet imperdiet. Cras ultrices sem ut leo efficitur posuere. </p>

                            <div className="container text-center">
                                <hr className="bg-danger" />
                                <div className="row">
                                    <div class="col">
                                        <p className="card-text text-danger">climate: {store.planet.climate}</p>
                                    </div>
                                    <div class="col">
                                        <p className="card-text text-danger">diameter: {store.planet.diameter}</p>
                                    </div>
                                    <div class="col">
                                        <p className="card-text text-danger">gravity: {store.planet.gravity}</p>
                                    </div>
                                    <div class="col">
                                        <p className="card-text text-danger">population: {store.planet.population}</p>
                                    </div>
                                    <div>
                                        <p className="card-text text-danger">orbital period: {store.planet.orbital_period}</p>
                                    </div>
                                </div>
                            </div>







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