import React, { useState, useEffect } from 'react'

const State = () => {

    const [info, setInfo] = useState({});
    const [address, setAddress] = useState([]);

    function fun() {
        const obj = {
            _id: "60cb8e61fc017b0ca8c3e093",
            firstname: "test",
            lastname: "test",
            phone: 111111111111111,
            gender: "male",
            email: "test@gmail.com",
            age: 40,
            addresses: [
                {
                    _id: "60cc3da785eaed01cc943cc2",
                    house: "E-401",
                    societyname: "Suryam elegance",
                    landmark: "near royal restaurant",
                    city: "Ahmedabad",
                    pincode: "382415",
                    place: "home"
                },
                {
                    _id: "60cc3da785eaed01cc943cc2",
                    house: "E-404",
                    societyname: "Suryam elegance",
                    landmark: "near royal restaurant",
                    city: "Ahmedabad",
                    pincode: "382418",
                    place: "home"
                },
                {
                    _id: "60cc3da785eaed01cc943cc2",
                    house: "E-401",
                    societyname: "Suryam elegance",
                    landmark: "near royal restaurant",
                    city: "Ahmedabad",
                    pincode: "382415",
                    place: "work"
                }
            ]
        }
        setInfo({ ...info, obj });
        const a = Object.values(obj.addresses);
        const b = [...a]
        console.log(Object.values(obj.addresses))
        console.log(obj.addresses)
        console.log(b[0])
        setAddress([...address, b[0]]);
    }











    let name = "Rupen"
    const [changename, setChangename] = useState(name);

    function change() {
        { changename === "RJ" ? setChangename("Rupen") : setChangename("RJ") }
    }


    useEffect(() => {
        fun();
    }, [])

    return (
        <>
            <div className="container">
                <p>{info.firstname}</p>
                <p>{info.societyname}</p>
                <p>Firstname</p>
                <p>Lastname</p>
                <p>Phone</p>
                <p>Email</p>
                <p>Gender</p>
                <p>Age</p>
            </div>
            <div className="address">
                {
                    address.map((element) => {
                        const { _id, house, societyname, landmark, city, pincode, place } = element;
                        return (
                            <>
                                <p>{house}, {societyname}, {landmark}, {city}, Gujarat-{pincode}</p>
                                <p>{house}, {societyname}, {landmark}, {city}, Gujarat-{pincode}</p>
                                <p>{house}, {societyname}, {landmark}, {city}, Gujarat-{pincode}</p>
                            </>
                        )
                    })
                }
            </div>
            <button onClick={change}>click</button>
            <h3>{changename}</h3>
        </>
    )
}

export default State
