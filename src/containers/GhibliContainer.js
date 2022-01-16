import React, {useState, useEffect} from "react";
import ContentContainer from "../components/ContentContainer";
import logo from "../img/studio-ghibli.png";

const GhibliContainer = () => {

    const [data, setData] = useState([]);
    const [selected, setSelected] = useState({id:"films", dispTitle: "All Films"});

    useEffect(() => {
        getData(selected.id);
    }, [selected])

    const getData = (selector) => {
        console.log(selector)
        fetch(`https://ghibliapi.herokuapp.com/${selector}`)
        .then(response => response.json())
        .then(data => setData(data))
    }

    const handleFilmsClick = (event) => {
        const newValues = {id:"films", dispTitle: "All Films"};
        setSelected(newValues);
        getData(event.target.value);
    }
    const handlePeopleClick = (event) => {
        const newValues = {id:"people", dispTitle: "All People"};
        setSelected(newValues);
        getData(event.target.value);
    }

    return(
        <div className="ghibli-container">
            <header>
                <div id="logo-container" >
                    <div id="logo-img-wrapper">
                        <img src={logo} width="300px"/>
                    </div>                    
                    <div id="button-container">
                        <button onClick={handleFilmsClick} value="films">films</button>
                        <button onClick={handlePeopleClick} value="people">people</button>
                        <button value="species">species</button>
                        <button value="locations">locations</button>
                        <button value="vehicles">vehicles</button>
                    </div>
                </div>
            </header>
            <ContentContainer data={data} selected={selected}/> 
        </div>
    )
}

export default GhibliContainer;