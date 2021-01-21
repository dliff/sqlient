import { apiPost } from '../api.js';
import { sqlSelectTables} from "../sql";

export const attemptConnect = credentials => {
    return function(dispatch) {
        return apiPost('/connect', {credentials: credentials}).then((result) => {
            if (result.success) {
                dispatch(setConnection(true));
                dispatch(fetchTables());
            } else {
                dispatch(setConnection(false));
            }
        })
    }
}

export const setConnection = connection => {
    return {
        type: 'connection/set',
        payload:
            {
                connection: connection
            }
    }
}

export const fetchTables = credentials => {
    return function(dispatch) {
        return apiPost('/query', {sql: sqlSelectTables}).then((result) => {
            console.log('tables result', result)
            if (result.success) {
                dispatch(setTables(result.rows));
            } else {
                dispatch(setTables([]));
            }
        })
    }
}

export const setTables = tables => {
    return {
        type: 'tables/set',
        payload:
            {
                tables: tables
            }
    }
}