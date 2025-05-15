
import './RegisterMobile.css'
import React, { useState, useEffect } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import {
//     authActions,
//     clientRegistation,
//     getClientByMob,
//     pageStatusChange,
// } from "../redux/athentication/Athentication";
// import { getOrderbyClId } from "../redux/order/OrderSlice";


const RegisterMobile = () => {
    // const { mob } = useSelector((state) => state.Athentication);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [mobile, setMobile] = useState();

    const [email, setEmail] = useState("");

    const [name, setName] = useState("");

    const [errormassageEmail, setErrormassageEmail] = useState("");
    const [uniqueemail, setUniqueEmail] = useState("");

    const [regError, setRegError] = useState("");
    const [submiterror, setSubmiterror] = useState("red");

    const emailchange = (e) => {
        const value = e.target.value;
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        setEmail(value);
        setErrormassageEmail("");
        if (value.length > 0) {
            if (value.match(mailformat)) {
                if (value != "") {
                    setUniqueEmail(value);
                }
            } else {
                setErrormassageEmail("please enter correct Email format");
            }
        } else {
            setErrormassageEmail("please enter correct Email format");
        }
    };

    // const onSubmitHandler = async (e) => {
    //     if (name !== "" && uniqueemail !== "") {
    //         const formData = {
    //             Name: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
    //             Email: uniqueemail,
    //             Mobile: mob,
    //         };

    //         const ClientDetails = await dispatch(clientRegistation(formData));

    //         if (ClientDetails.payload.success) {
    //             setEmail(email);
    //             setName(name);
    //             setMobile(mobile);
    //             setRegError("Registation Successfully");
    //             setSubmiterror("green");
    //             dispatch(
    //                 authActions.signin({
    //                     // token: ClientDetails.token,
    //                     ...ClientDetails.payload.client,
    //                     isAuth: true,
    //                 })
    //             );
    //             const client = ClientDetails.payload.client;
    //             dispatch(getOrderbyClId(client._id));
    //             navigate("/");
    //             dispatch(pageStatusChange(0));
    //         } else {
    //             setRegError("Registation Un-Successfully");
    //             setSubmiterror("red");
    //         }
    //     } else if (name === "") {
    //         setRegError("Name cannot be empty");
    //         setSubmiterror("red");
    //     } else if (email === "") {
    //         setRegError("Email cannot be empty");
    //         setSubmiterror("red");
    //     }
    // };
    return (
        <div className="register_mobile">
            <div className='inside_register_page'>
                <div className='center_containerrrr'>
                    <img src='../assets/images/customer-regis.png' className='inside_image' />
                    <div className='container_sub_divv'>
                        <span className='a_whole_p'>A Whole Grocery Store at your figertips</span>
                    </div>
                </div>
                <div className='to_make_centerrrr'>
                    <div className='create_acccount_register'>
                        <div className='cre_acccc_reg'>
                            <div>
                                <h2 className='create_acccccc'>Create Account</h2>
                            </div>
                            <div className='input_containerrrrrr_'>
                                <input type='text'
                                    placeholder='Your Full Name'
                                    className='input_insideee'

                                    value={name}
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                    style={{ textTransform: "capitalize" }}

                                />
                            </div>
                            <div className='input_containerrrrrr_'>
                                <input type='email'
                                    placeholder='Your Email'
                                    className='input_insideee'
                                    required
                                    value={email}
                                    onChange={(e) => emailchange(e)}
                                />

                                <p style={{ color: "red" }} className="mt-2">
                                    {errormassageEmail}
                                </p>
                            </div>
                            <div className='div_containerrrrrr'>
                                <button className='registerr_text'>
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RegisterMobile

