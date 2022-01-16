import React, {useState} from "react";

const Film = ({data}) => {

    const [style, setStyle] = useState({height: '0px'})

    const handleMouseIn = () => {
        setStyle({height: '200px'});
    }
    const handleMouseOut = e => {
        setStyle({height: '0px'})
    }

    return (
        <div className="film" onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
            <img id="film-image" src={data['movie_banner']} />
            <div className="film-info">
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

export default Film;