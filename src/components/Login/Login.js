import React from "react";
import './Login.css';

export default function Login(){
    return(
        <div className="login-wrapper">
        <form action={login}>
            <label>
                <p>username:</p>
                <input name="username" />
            </label>
            <label>
                <p>password:</p>
                <input name="password" />
            </label>
            <div>
                <button type="submit">submit</button>
            </div>
        </form>
        </div>
    )
}