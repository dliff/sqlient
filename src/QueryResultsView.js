/** @jsxRuntime classic */
/** @jsx jsx */

import * as style from "./style";
import { jsx, css } from '@emotion/react'
import { useSelector} from "react-redux";

const QueryResultsView = () => {
    const queryResults = useSelector(state => state.queryResults)
    let queryResultsColumns
    if (queryResults != null && queryResults.length > 0) {
        queryResultsColumns = Object.keys(queryResults[0])
    }

    // Never allow React to reuse cells, as data may have changed, or a column like `id` could have been
    // aliased by the user from a different column.
    let key = 0;
    const getKey = () => { return key++;}

    return (
        <div css={style.tableWrapper}>
            {queryResultsColumns &&
            <div css={[style.resultsTable, css`grid-template-columns: repeat(${queryResultsColumns.length}, 1fr);`]}>
                {queryResultsColumns && queryResultsColumns.map(columnName =>
                    <div key={columnName} css={style.resultsTableHeader}>
                        {columnName}
                    </div>)}

                {queryResults && queryResults.map( row => {
                    return Object.values(row).map( c =>
                    {
                        return (<div key={c + getKey().toString()} css={style.resultsTableCell}>{c}</div>);
                    })
                })}
            </div>
            }
        </div>
    );
}
export default QueryResultsView