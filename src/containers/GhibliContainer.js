import React, {useState, useEffect} from "react";
import ContentContainer from "../components/ContentContainer";
import logo from "../img/studio-ghibli.png";

const GhibliContainer = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        fetch(`https://ghibliapi.herokuapp.com/films`)
        .then(response => response.json())
        .then(data => {
            setData(data);
        })
    }

    return(
        <div className="ghibli-container">
            <header>
                <div id="logo-container" >
                    <div id="logo-img-wrapper">
                        <img src={logo} width="300px"/>
                    </div>                    
                    <div id="button-container">
                        <p>films</p>
                        <p>people</p>
                        <p>species</p>
                        <p>locations</p>
                        <p>vehicles</p>
                    </div>
                </div>
            </header>
            <ContentContainer data={data}/>
        </div>
    )
}

export default GhibliContainer;