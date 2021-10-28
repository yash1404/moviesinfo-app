import React from 'react'
import "./Moviedetail.css"

function Moviedetail({ arrayofdata }) {
    return (


        <div className="container ">
            <div className="row">

                {
                    arrayofdata.map((curr,i) => {
                        const { Poster, Title, Year, Type } = curr;
                        return (
                            <div key={i} className="col-lg-3  picturedata">
                                <img src={Poster} alt="posters of films" />
                                <h4>{Title}</h4>
                                <div className="yearandtype">
                                    <h6>Year:{Year}</h6>
                                    <h6>Type:{Type}</h6>
                                </div>

                            </div>

                        )
                    })
                }



            </div>
        </div>

        // <div className="picturedata">
        //     <img src={showposter} alt=""/>
        //     <h4>{showtitle}</h4>
        //     <div className="yearandtype">
        //         <h6>year:{showyear}</h6>
        //         <h6>type:{showtype}</h6>
        //     </div>

        // </div>


    )
}

export default Moviedetail
