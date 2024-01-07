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

			<div className="card mb-3" style={{ maxWidth: "1250px" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={"https://starwars-visualguide.com/assets/img/characters/" + params.theid + ".jpg"} className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{store.character.name}</h5>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus quis tellus facilisis sodales. Aliquam viverra tempor gravida. Phasellus eu mattis ipsum. Integer suscipit consectetur tortor sed placerat. Etiam convallis viverra luctus. Duis mauris nisl, cursus laoreet viverra sed, congue sit amet orci. Nullam diam elit, semper eu posuere in, semper sed ligula. Aliquam nec eros in dui consequat rhoncus ac a massa. Fusce ac dolor sapien. Integer rutrum ut eros sit amet sollicitudin. Fusce dictum risus risus, aliquam fermentum magna ultricies et. Proin lobortis ante nec luctus faucibus. Phasellus eu efficitur augue. Sed volutpat laoreet imperdiet. Cras ultrices sem ut leo efficitur posuere. </p>
							<hr className="bg-danger" />
							<div class="container text-center">
								<div class="row">
									<div class="col">
										<p className="card-text text-danger">birth year: {store.character.birth_year}</p>
									</div>
									<div class="col">
										<p className="card-text text-danger">gender: {store.character.gender}</p>
									</div>
									<div class="col">
										<p className="card-text text-danger">height: {store.character.height}</p>
									</div>
									<div class="col">
										<p className="card-text text-danger">mass: {store.character.mass}</p>
									</div>
									<div class="col">
										<p className="card-text text-danger">eye color: {store.character.eye_color}</p>
									</div>
									<div class="col">
										<p className="card-text text-danger">hair color: {store.character.hair_color}</p>
									</div>
								</div>
							</div>







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
