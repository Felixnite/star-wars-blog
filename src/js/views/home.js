import React, {useContext} from "react";
import CharacterCard from "../component/CharacterCard.jsx";
import PlanetCard from "../component/PlanetCard.jsx";
import "../../styles/home.css"
import { Context } from "../store/appContext.js";


export const Home = () => {
	const {store} = useContext(Context)
	return (
		<>
			<div className="container">
				<h1 className="text-danger">Personaje</h1>
				<div className="my-carrousel">
					{
						store.characters.map((person) => {
							return( 
								<CharacterCard key={person._id} person={person} />
							)
						})
					}
					
				
				</div>
		</div>
			<div className="container mt-5">
				<h1 className="text-danger">Planetas</h1>
				<div className="my-carrousel">

				{
						store.planets.map((planets) => {
							return( 
								<PlanetCard key={planets._id} planets={planets} />
							)
						})
					}




					{/* <PlanetCard />
					<PlanetCard />
					<PlanetCard />
					<PlanetCard />
					<PlanetCard />
					<PlanetCard /> */}
					

				</div>
			</div>
		</>
	)
};
