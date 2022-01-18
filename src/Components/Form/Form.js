import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState([]);
    const sendData = (e) => {
        e.preventDefault();
        if (email && password) {
            const dataObj = { email, password }
            setData([...data, dataObj]);
            setEmail("");
            setPassword("");
            toast.dark("Welcome to website", {
                position: "top-center"
            })
        }
        else {
            alert("Field can not be blank");
        }
    }

    console.log(data);
    return (
        <>
            <div className="container-fluid form_container">
                <div className="row">
                    <div className="col-6">
                        <div className="form">
                            <form method="post" className="myform" onSubmit={sendData}>
                                <input type="text" className="myinput" autoComplete="off" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <input type="text" className="myinput" autoComplete="off" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                                <button type="submit" className="btnsubmit">Login</button>
                                <ToastContainer />
                            </form>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="table_container">
                            <table className="mytable">
                                <thead>
                                    <tr>
                                        <th>Email</th>
                                        <th>Password</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((data) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>{data.email}</td>
                                                        <td>{data.password}</td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form
