
import React, { useState } from "react";
import { jsx, css, Global, ClassNames } from '@emotion/react'
import {useDispatch} from 'react-redux'
import { attemptConnect } from "./state/actions.js"

const mainStyle =
css`
        padding: 32px;
        background-color: #cb4c11;
        font-size: 24px;
        border-radius: 25px;
        width:400px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        `;
const inputGroupStyle = css`
p {
  font-size:10px;
  margin-bottom:0;
}
input {
margin-top:0;
border-radius:20px;
border:0;
height:25px;
width:100%;
padding-left:10px;
}
`;
const connectButtonStyle = css`
border-radius:20px;
border:0;
height:25px;
margin: 0 auto;
display:block;
margin-top:25px;
`;
const ConnectView = (props) => {
    // const [username, setUsername] = useState("");
    // const [host, setHost] = useState("");
    // const [database, setDatabase] = useState("");
    // const [password, setPassword] = useState("");
    // const [port, setPort] = useState("5432");
    const dispatch = useDispatch()

    const [username, setUsername] = useState("postgres");
    const [host, setHost] = useState("127.0.0.1");
    const [database, setDatabase] = useState("hs");
    const [password, setPassword] = useState("");
    const [port, setPort] = useState("5432");
    const connect = () => {
        dispatch(attemptConnect({
            username: username,
            host: host,
            database: database,
            password:password,
            port:port
        }));
    }
    return (
        // These inputs could be DRY-er, but on a real app this structure would
        // diverge pretty quickly.
        <div className={mainStyle}>
            <h3>SQLIENT</h3>
            <div css={inputGroupStyle}>
                <p>Host</p>
                <input type="text" value={host} onChange={e => setHost(e.target.value)}/>
            </div>
            <div className={inputGroupStyle}>
                <p>Database Name</p>
                <input type="text"  value={database} onChange={e => setDatabase(e.target.value)}/>
            </div>
            <div className={inputGroupStyle}>
                <p>Port</p>
                <input type="text"  value={port} onChange={e => setPort(e.target.value)}/>
            </div>
            <div className={inputGroupStyle}>
                <p>Username</p>
                <input type="text"  value={username} onChange={e => setUsername(e.target.value)}/>
            </div>
            <div className={inputGroupStyle}>
                <p>Password</p>
                <input type="password"  value={password} onChange={e => setPassword(e.target.value)}/>
            </div>

            <button className={connectButtonStyle} onClick={connect}>Connect</button>
        </div>
    )
}
export default ConnectView