import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetCard = ({ planets }) => {
    const{store, actions}= useContext(Context)
    return (


        <div className="my-card">
            {planets.uid == 1 ?
                <img src={"https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"} alt="Planets Picture" style={{ width: "347px" }} /> :

                <img src={"https://starwars-visualguide.com/assets/img/planets/" + planets.uid + ".jpg"} alt="Planets Picture" style={{ width: "347px" }} />}
            {/* <img src="..." alt="Planet Picture" /> */}
            <div className="p-3">
                <h3>{planets.properties.name}</h3>

                <p>Population: {planets.properties.population} </p>
                <p>Terrain: {planets.properties.terrain} </p>


            </div>
            <div className="d-flex justify-content-evenly">
            <Link to ={"/singlePlanets/"+planets.uid} className="btn btn-primary"
                 >
                    Learn more 
                 </Link>
                <button className="btn btn-warning" onClick={()=> actions.favorites(planets.properties.name)}> <i className="fa fa-heart"></i> </button>
            </div>
        </div>
    )
};

export default PlanetCard