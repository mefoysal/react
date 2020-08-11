import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
    return (
        <React.Fragment>
            <div className="service">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <h2 className="text-center py-4">Our Services</h2>
                            <div className="row">
                                <div className="col-10 mx-auto">
                                    <div className="row">
                                        {Sdata.map((val, inx) =>{
                                            return <Card
                                                key={inx}
                                                imgs={val.imgsrc}
                                                tit={val.title}
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
export default Service;