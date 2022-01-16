import React, {useState} from "react";
import ghost from '../img/ghost.png'

const Item = ({data}) => {

    const [style, setStyle] = useState({display: 'none'})

        const handleMouseIn = () => {
            setStyle({display: 'block', height: '200px'});
        }
        const handleMouseOut = e => {
            setStyle({display: 'none'})
        }

    return (
        <div className="item" onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
            <img src={data['movie_banner']} />
            <div className="item-info">
                <div className="primary-info">
                    <h4>{data.title}</h4>
                </div>
                <div className="secondary-info" style={style}>
                    <h4 >test</h4>
                </div>
            </div>
        </div>
    
    )
}

export default Item;