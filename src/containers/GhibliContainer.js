import React from "react";
import ContentContainer from "../components/ContentContainer";
import logo from "../img/studio-ghibli.png";

const GhibliContainer = () => {
    return(
        <div className="ghibli-container">
            <header>
                <div id="logo-container" >
                    <div id="img-wrapper">
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
            <ContentContainer/>
        </div>
    )
}

export default GhibliContainer;