/** @jsxRuntime classic */
/** @jsx jsx */

import { useState } from "react";
import { jsx } from '@emotion/react'
import {useDispatch, useSelector} from 'react-redux'
import { attemptConnect } from "./state/actions.js"
import * as style from './style'

const ConnectView = (props) => {
    const dispatch = useDispatch()
    const connectionStatus = useSelector(state => state.connectionStatus);

    const [username, setUsername] = useState("postgres");
    const [host, setHost] = useState("127.0.0.1");
    const [database, setDatabase] = useState("");
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
        <div css={style.mainStyle}>
            <h3>SQLIENT</h3>
            <div css={style.inputGroupStyle}>
                <p>Host</p>
                <input type="text" value={host} onChange={e => setHost(e.target.value)}/>
            </div>
            <div css={style.inputGroupStyle}>
                <p>Database Name</p>
                <input type="text"  value={database} onChange={e => setDatabase(e.target.value)}/>
            </div>
            <div css={style.inputGroupStyle}>
                <p>Port</p>
                <input type="text"  value={port} onChange={e => setPort(e.target.value)}/>
            </div>
            <div css={style.inputGroupStyle}>
                <p>Username</p>
                <input type="text"  value={username} onChange={e => setUsername(e.target.value)}/>
            </div>
            <div css={style.inputGroupStyle}>
                <p>Password</p>
                <input type="password"  value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <div>{connectionStatus}</div>
            <button css={style.connectButtonStyle} onClick={connect}>Connect</button>
        </div>
    )
}
export default ConnectView