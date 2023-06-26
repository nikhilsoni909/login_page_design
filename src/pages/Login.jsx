import React from 'react'
import Add from "../img/addAvatar.png";
import { useState } from 'react';
const Login = () => {
    return (
        <div className="formContainer">
            <div class="sidediv">
                <span class="sidetitle"> Board.</span>
            </div>
            <div className="formWrapper">

                <span className="logo">Sign In</span>
                <span className="title">sign in to your account</span>
                <div className="options">
                    <span className="google">
                        <img className="galogo" src="https://www.salesforceben.com/wp-content/uploads/2021/03/google-logo-icon-PNG-Transparent-Background.png" alt="googlelogo" />
                        sign in with google</span>
                    <span className="apple">
                        <img className="galogo" src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-apple-grey-logo-png-transparent-pngpix-24.png" alt="applelogo" />
                        sign in with apple</span>
                </div>
                <form  >

                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />

                    <button>Sign in</button>
                </form>
                <p>Don't have any accont ?
                    <span className="reg">Register here</span>  </p>
            </div>
        </div>
    )
}
export default Login;