/** @jsxRuntime classic */
/** @jsx jsx */

import * as style from "./style";
import { jsx } from '@emotion/react'
import {useDispatch, useSelector} from "react-redux";
import {UnControlled as CodeMirror} from "react-codemirror2";
import {useRef} from "react";
import {setActiveQueryAndFetch} from "./state/actions";

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

const QueryEditorView = () => {
    const dispatch = useDispatch()
    const editorRef = useRef(null);
    const queryStatus = useSelector(state => state.queryStatus);
    const _runQuery = () => {
        const sql = editorRef.current.getValue()
        dispatch(setActiveQueryAndFetch(sql));
    }
    return (<div>
            <div css={style.editorWrapperStyle}>
                <CodeMirror
                    editorDidMount={editor => { editorRef.current = editor }}
                    options={{
                        mode: 'sql',
                        theme: 'material',
                        lineNumbers: true,
                        value: 'select * from profile_profile;'
                    }}
                    onChange={(editor, data, value) => {
                    }}
                />
            </div>
            <button css={style.queryButtonStyle} onClick={_runQuery}>Run Query >></button>
            <div css={style.queryStatus}>{queryStatus}</div>
        </div>
    );
}
export default QueryEditorView;