import React from "react";
import Film from "./Film";
import Person from "./Person";

const ContentList = ({data, selected}) => {

    const renderContent = () => {
        const dataNodes = data.map((item, i) => {
            if(selected.id === "films"){
                return <Film key = {i} data = {item}/>
            }
            if(selected.id === "people"){
                return <Person key = {i} data = {item}/>
            }
        })
        return dataNodes
    }
    return(
        <div id="content-list">
            {renderContent()}
        </div>
    )
}

export default ContentList