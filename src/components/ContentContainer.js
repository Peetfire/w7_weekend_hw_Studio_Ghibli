import React from "react";
import ContentList from "./ContentList";

const ContentContainer = () => {
    const title = "Dummy title";
    return (
        <div id="content-container">
            <h1>{title}</h1>
            <ContentList/>
        </div>
    )
}

export default ContentContainer;