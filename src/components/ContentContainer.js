import React from "react";
import ContentList from "./ContentList";

const ContentContainer = ({data, selected}) => {

    return (
        <div id="content-container">
            <h1>{selected.dispTitle}</h1>
            <ContentList data={data} selected={selected}/>
        </div>
    )
}

export default ContentContainer;