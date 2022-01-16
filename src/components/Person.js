import React, {useState, useEffect} from "react";
import ghost from '../img/ghost.png'

const Person = ({data}) => {

    const [species, setSpecies] = useState({});
    const [films, setFilms] = useState({});

    useEffect(() => {
        const promise1 = data.species;
        const promise2 = data.films
        Promise.all([promise1, promise2]).then(values =>{
            getSpecies(values[0]);
            getFilms(values[1]);
        })
    }, []);

    const getSpecies = (url) => {
        fetch(url)
        .then(response => response.json())
        .then(data => setSpecies(data));
    }

    const getFilms = (url) => {
        fetch(url[0])
        .then(async response => response.json())
        .then(data => setFilms(data));
    }

    return (
        <div className="person" >
            <div className="person-info">
                <img className="person-img" src={ghost} />
                <div className="primary-person-info">
                    <div id="line-wrapper">
                        <h4><b>Name:</b> {data.name}</h4>     
                    </div>
                    <div id="line-wrapper">
                        <h4><b>Age:</b> {data.age}</h4> 
                        <h4><b>&#9893;</b> {data.gender}</h4> 
                    </div>
                    <div id="line-wrapper">
                    <h4><b>Species:</b> {species.name}</h4> 
                        <h4><b>👁</b> {data.eye_color}</h4>
                    </div>
                    <div id="line-wrapper">
                        <h4><b>Hair color:</b> {data.hair_color}</h4>
                    </div>
                    <div id="line-wrapper">
                        <h4><b>Films:</b> {films.title}</h4>   
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Person;