import React, { useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        email:"",
        number:"",
        messege:""
    });
    const InputEvent = (event) => {
        const {name, value} = event.target;
        setData((preVal) =>{
            return{
                ...preVal,
                [name]:value,
            };
        });
    }
    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`${data.email}`);
    }
    return (
        <React.Fragment>
            <div className="service">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <h2 className="text-center py-4">Contact Me</h2>
                            <div className="row">
                                <div className="col-md-6 col-10 mx-auto">
                                    <form onSubmit={formSubmit} action="">
                                        <div className="mb-3">
                                            <div className="form-group">
                                                <label>Full Name</label>
                                                <input type="text" className="form-control" name="fullname" value={data.fullname} onChange={InputEvent} />
                                                
                                            </div>
                                            <div className="form-group">
                                                <label>Email address</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={data.email} onChange={InputEvent}/>
                                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                            </div>
                                            <div className="form-group">
                                                <label>Phone Number</label>
                                                <input type="number" className="form-control" id="exampleInputnumber1" name="number" value={data.number} onChange={InputEvent}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Your Messege</label>
                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="messege" value={data.messege} onChange={InputEvent}></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-start">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Contact;