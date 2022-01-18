import React, { useState, useEffect } from 'react';
import Loading from './Loadig';

const Effectapi = () => {

    const [loading, setLoading] = useState(true);
    const [userdata, setUserdata] = useState([]);

    const getUsers = async () => {
        try {
            const res = await fetch("https://api.github.com/users", {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });
            setLoading(false);
            const userdata = await res.json();
            setUserdata([...userdata, userdata]);
        }
        catch (error) {
            setLoading(false);
            console.log("Some error to fetch users " + error);
        }
    }

    console.log(userdata);

    if (loading) {
        <Loading />
        console.log("loading");
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <>
            <div className="effectapi">
                <div className="header">
                    <h4>List of github users</h4>
                </div>
                <div className="userbox">
                    {userdata.map((user) => {
                        const { id, avatar_url, login } = user
                        return (
                            <>
                                <div className="user" key={id}>
                                    <h4 className="username">{login}</h4>
                                    <div className="usercontent">
                                        <div className="userimage">
                                            <img src={avatar_url} />
                                        </div>
                                        <div className="userinfo">
                                            <h5 className="userwork">Web developer</h5>
                                            <div className="useracinfo">
                                                <div className="userinfoinner">
                                                    <h6>Articles</h6>
                                                    <p>99</p>
                                                </div>
                                                <div className="userinfoinner">
                                                    <h6>Followers</h6>
                                                    <p>{id}</p>
                                                </div>
                                                <div className="userinfoinner">
                                                    <h6>Following</h6>
                                                    <p>{id}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Effectapi
