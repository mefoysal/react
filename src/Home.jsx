import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/img/header-bg.png";
const Home = () => {
    return (
        <React.Fragment>
            <div className="d-flex align-items-center" id="header">
                <div className="container-fluid nav-bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>Grow your bisnuss with <span className="brand-c">NameJone Dev</span></h1>
                                    <h5 className="my-3">we are create uniche html template for you</h5>  
                                    <div className="mt-3">
                                        <NavLink to="/service" className="btn btn-start">
                                            Get Started
                                        </NavLink>
                                    </div>  
                                </div> 
                                <div className="col-md-6 order-1 order-lg-2 header-image animated">
                                    <img src={web} alt="Header"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Home;