import React, {useState} from "react";
import ghost from '../img/ghost.png'

const Item = ({data}) => {

    const [style, setStyle] = useState({height: '0px'})

        const handleMouseIn = () => {
            setStyle({height: '200px'});
        }
        const handleMouseOut = e => {
            setStyle({height: '0px'})
        }

    return (
        <div className="item" onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
            <img src={data['movie_banner']} />
            <div className="item-info">
                <div className="primary-info">
                    <h4><b>{data.title}</b></h4>
                    <h4>{data.original_title}</h4>
                </div>
                <div className="secondary-info" style={style}>
                    <div id="desc-wrapper">
                        <h4><b>Description:</b> {data.description}</h4>
                    </div>
                    <div id="line-wrapper">
                        <h4><b>Director:</b> {data.director} </h4>
                        <h4><b>Released:</b> {data.release_date}</h4>
                    </div>
                    <div id="line-wrapper">
                        <h4><b>Producer:</b> {data.producer} </h4>
                        <h4><b>Runtime:</b> {data.running_time} min</h4>
                    </div>
                    <div id="line-wrapper">
                        <h4></h4>
                        <h4><b>Rotten Tomatoes Score:</b> {data.rt_score}% </h4>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default Item;