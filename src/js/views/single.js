import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getSingleCharacter(params.theid)
	}, [])
	return (
		<div className="container">
		
			<div className="card mb-3" style={{maxWidth: "540px"}}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={"https://starwars-visualguide.com/assets/img/characters/"+params.theid+".jpg"} className="img-fluid rounded-start" alt="..."/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{store.character.name}</h5>
							<p className="card-text">birth age: {store.character.birth_year}</p>
							<p className="card-text">gender: {store.character.gender}</p>
							<p className="card-text">height: {store.character.height}</p>
							<p className="card-text">mass: {store.character.mass}</p>
						</div>
					</div>
				</div>
			</div>
			{/* <h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link> */}
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
