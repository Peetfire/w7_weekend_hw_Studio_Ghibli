import React from "react";
import ContentList from "./ContentList";

const ContentContainer = ({data}) => {
    const title = "Dummy Title";
    return (
        <div id="content-container">
            <h1>{title}</h1>
            <ContentList data={data}/>
        </div>
    )
}

export default ContentContainer;