/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { jsx, css, Global, ClassNames } from '@emotion/react'
import * as style from './style'

import TableListView from "./TableListView";
import QueryEditorView from "./QueryEditorView"
import QueryResultsView from "./QueryResultsView"
import SchemaView from "./SchemaView"

const QueryView = (props) => {
    return (
        <>
            <Global styles={style.fullHeightStyle} />
            <div css={style.columnStyle}>
                <div css={style.col1Style}>
                    <h4>Tables</h4>
                    <TableListView/>
                </div>
                <div css={style.col2Style}>
                    <div css={style.equalRow}>
                        <div css={style.flexRow}>
                            <div css={style.editorColumn}>
                                <h4>Query Editor</h4>
                                <QueryEditorView />
                            </div>
                            <div css={style.schemaColumn}>
                                <h4>Schema</h4>
                                <SchemaView />
                            </div>
                        </div>
                    </div>
                    <div css={style.equalRow}>
                        <QueryResultsView />
                    </div>
                </div>
            </div>
            >
        </>
    );
}

export default QueryView