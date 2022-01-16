import React, {useState, useEffect} from "react";
import ContentContainer from "../components/ContentContainer";
import Filter from "../components/Filter";
import logo from "../img/studio-ghibli.png";

const GhibliContainer = () => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selected, setSelected] = useState({id:"films", dispTitle: "Films"});

    useEffect(() => {
        getData(selected.id);
    }, [selected])

    const getData = (selector) => {
        console.log(selector)
        fetch(`https://ghibliapi.herokuapp.com/${selector}`)
        .then(response => response.json())
        .then(data => {
            setData(data)
            setFilteredData(data)
        })
    }

    const handleFilmsClick = (event) => {
        const newValues = {id:"films", dispTitle: "Films"};
        setSelected(newValues);
        getData(event.target.value);
    }
    const handlePeopleClick = (event) => {
        const newValues = {id:"people", dispTitle: "People"};
        setSelected(newValues);
        getData(event.target.value);
    }

    const filterData = (searchString) => {
        const parsedString = searchString.toLowerCase();
        const filteredData = data.filter((item) => {
                if ('title' in item){
                    return item.title.toLowerCase().indexOf(parsedString) > -1
                }
                if('name' in item){
                    return item.name.toLowerCase().indexOf(parsedString) > -1
                }
                
        });
        setFilteredData(filteredData)
    }

    return(
        <div className="ghibli-container">
            <header>
                <div id="logo-container" >
                    <div id="logo-img-wrapper">
                        <img src={logo} width="300px"/>
                    </div>                    
                    <div id="button-container">
                        <button onClick={handleFilmsClick} value="films">films</button>
                        <button onClick={handlePeopleClick} value="people">people</button>
                        <button value="species">species</button>
                        <button value="locations">locations</button>
                        <button value="vehicles">vehicles</button>
                        <Filter handleChange = {filterData}/>
                    </div>
                </div>
            </header>
            <ContentContainer data={filteredData} selected={selected}/> 
        </div>
    )
}

export default GhibliContainer;