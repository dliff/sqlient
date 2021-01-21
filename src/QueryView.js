import React, { useState } from "react";

import { jsx, css, Global, ClassNames } from '@emotion/react'

import {connect, useSelector} from 'react-redux'
import { attemptConnect } from "./state/actions.js"
const leftPaneStyle = css`
width:200px;
float:left;
height:100px;
border:2px solid black;
`;

const QueryView = (props) => {
    const tables = useSelector(state => state.tables)
    return (
        <>
            <Global
      styles={css`
        html,body {
          height:100%;
        }
      `}
    />
            <div className={leftPaneStyle}>Hello</div>
    </>

    );
}

export default QueryView