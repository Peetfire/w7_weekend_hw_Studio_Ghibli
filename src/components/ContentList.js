import React from "react";
import Item from "./Item";

const ContentList = ({data}) => {

    const dataNodes = data.map((item, i) => {
        return(
            <Item key = {i} data = {item}/>
        )
    })

    return(
        <div id="content-list">
            {dataNodes}
        </div>
    )
}

export default ContentList