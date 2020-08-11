import React from "react";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import Teamdata from "./Teamdata";


const About = () => {
    const imgLink = 'https://picsum.photos/450/480?random=1';
    return (
        <React.Fragment>
            <div className="service">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <h2 className="text-center py-4">About Us</h2>
                            <div className="row">
                                <div className="col-10 mx-auto">
                                    <div className="row py-5">
                                        <div className="col-md-6">
                                            <img src={imgLink} alt="about" className="about_image"/>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="abo_text d-flex justify-content-center flex-column pl-4">
                                                <h1>Lorem ipsum dolor sit amet.</h1>
                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A hic delectus ad corrupti ipsa?</p>
                                                <NavLink className="btn btn-start abt" to={'/contact'}>Contact Me</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="sec_title text-center py-5">
                                                <h2>Meet My Team</h2>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                        {Teamdata.map((val , ind)=>{
                                            return<Card
                                                key={ind}
                                                tit={val.title}
                                                imgs={val.imgsrc}
                                            />
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default About;