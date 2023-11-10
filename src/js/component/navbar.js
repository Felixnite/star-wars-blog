import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (

		<nav className="navbar bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png" style={{width:"100px"}}/></a>
				<form className="d-flex" role="search">

				
					<button className="nav-link dropdown-toggle btn btn-outline-warning"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu dropdown-menu-end" style={{color:"white"}}>
						{store.fav.map((item, id) => (
							<li key={id}><a className="dropdown-item"  onClick={() => actions.favorites(item)}>{item}</a></li>
						))}


					</ul>
				
				</form>
			</div>
		</nav>


	);
};
