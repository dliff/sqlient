/** @jsxRuntime classic */
/** @jsx jsx */

import * as style from "./style";
import { jsx, css } from '@emotion/react'
import { useSelector} from "react-redux";

const SchemaView = () => {
    const activeTable = useSelector(state => state.activeTable);
    const activeTableSchema = useSelector(state => state.activeTableSchema)

    let key = 0;
    const getKey = () => { return key++;}

    return (<div>
            <h4>{activeTable ? <div>{activeTable}</div> : ''}</h4>
            <div css={style.tableWrapper}>
                <div css={[style.resultsTable, css`grid-template-columns: repeat(3, 1fr);`]}>
                    {activeTableSchema.map( row => {
                        return Object.values(row).map( c =>
                        {
                            return (<div key={getKey()} css={style.resultsTableCell}>{c}</div>);
                        })
                    })}
                </div>
            </div>
        </div>
    );
}
export default SchemaView;