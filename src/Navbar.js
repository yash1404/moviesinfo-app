import React, { useState } from 'react'
import Moviedetail from './Moviedetail'
import axios from "axios"

import "./Navbar.css"
function Navbar() {

    const [searchdata, setsearchdata] = useState("");
    const [data, setdata] = useState([]);
    const API_KEY = "d3e802cf"



    const getdata = async () => {
        try {
            
                
            const response = await axios.get(`https://www.omdbapi.com/?s=${searchdata}&apikey=${API_KEY}`)
            console.log(response.data.Search)
            setdata(response.data.Search);
            
            
        }

        catch (error) {
            alert("oops!! try with different movie name....")
        }

    }


    const onsubmit = (e) => {
        getdata();
        e.preventDefault();
    }

    const onchangefunc = (e) => {
        setsearchdata(e.target.value);
    }





    return (
        <React.Fragment>

            <div className="nav">
                <div className="icon">
                    <h1>React movie app</h1>
                    <img src="../../img/camera2.png" />
                </div>


                <form onSubmit={onsubmit}>
                    <input type="text" placeholder=" enter movie name" className="searchbar" value={searchdata} onChange={onchangefunc}>
                    </input>
                    <input type="submit" value="search" className="search"></input>
                </form>

            </div>

            <Moviedetail arrayofdata={data} />


        </React.Fragment>


    )
}

export default Navbar
