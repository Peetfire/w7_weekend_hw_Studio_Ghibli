import React from "react";
import ghost from '../img/ghost.png'

const Item = ({data}) => {
    return (
        <div id="item">
            <img src={data['movie_banner']} />
        </div>
    
    )
}

export default Item;