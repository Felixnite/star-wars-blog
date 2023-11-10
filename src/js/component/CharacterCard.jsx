import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CharacterCard = ({person}) => {
    const{store, actions}= useContext(Context)
    // console.log(person.uid)
    return (
        <div className="my-card">
            <img src={"https://starwars-visualguide.com/assets/img/characters/"+person.uid+".jpg"} alt="Character Picture"style={{width:"347px"}} />
            <div className="p-3">
                <h3>{person.properties.name}</h3>

                <p>Gender: {person.properties.gender}</p>
                <p>Hair-color: {person.properties.hair_color} </p>
                <p>Eye-color: {person.properties.eye_color} </p>

            </div>
            <div className="d-flex justify-content-evenly">
              
                 <Link to ={"/single/"+person.uid} className="btn btn-primary"
                 >
                    Learn more 
                 </Link>
                 
        

                <button className="btn btn-warning" onClick={()=> actions.favorites(person.properties.name)}> <i className="fa fa-heart"></i> </button>
            </div>
        </div>
    )
};

export default CharacterCard