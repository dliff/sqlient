/** @jsxRuntime classic */
/** @jsx jsx */

import * as style from "./style";
import { jsx } from '@emotion/react'
import {useDispatch, useSelector} from "react-redux";
import {setActiveTableFetchSchema} from "./state/actions";

const TableListView = () => {
    const dispatch = useDispatch()
    const tables = useSelector(state => state.tables)
    const activeTable = useSelector(state => state.activeTable);

    const _setActiveTable = (tableName) => {
        dispatch(setActiveTableFetchSchema(
            tableName
        ));
    }
    return (
        <ul css={style.tableListStyle}>
            {tables.map( t =>
                <li css={activeTable === t.tablename ? style.activeStyle : null} key={t.tablename} onClick={() => _setActiveTable(t.tablename)}>{t.tablename}</li>
            )}
        </ul>
    );
}
export default TableListView;