import { apiPost } from '../api.js';
import { sqlSelectTables, sqlSelectTableSchema } from "../sql";
import store from './store';

export const attemptConnect = credentials => {
    return function(dispatch) {
        return apiPost('/connect', {credentials: credentials}).then((result) => {
            console.log(result);
            if (result.success) {
                dispatch(setConnection(true));
                dispatch(fetchTables());
                dispatch(setConnectionStatus(''));
            } else {
                dispatch(setConnection(false));
                dispatch(setConnectionStatus(result.errorMessage));
            }
        }).catch((failure) => {
            dispatch(setConnectionStatus("Connection failed."));
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

export const setConnectionStatus = status => {
    return {
        type: 'connection/setConnectionStatus',
        payload: status
    }
}

export const fetchTables = credentials => {
    return function(dispatch) {
        return apiPost('/query', {sql: sqlSelectTables}).then((result) => {
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

export const setActiveTable = tableName => {
    return {
        type: 'tables/setActiveTable',
        payload: tableName
    }
}

export const setActiveTableSchema = schema => {
    return {
        type: 'tables/setActiveTableSchema',
        payload: schema
    }
}

export const setActiveTableFetchSchema = tableName => {
    return function(dispatch) {
        dispatch(setActiveTable(tableName))

        // Clear existing.
        dispatch(setActiveTableSchema([]));
        return apiPost('/query', {sql: sqlSelectTableSchema(tableName)}).then((result) => {
            if (result.success) {
                dispatch(setActiveTableSchema(result.rows));
            } else {
                dispatch(setActiveTableSchema([]));
            }
        })
    }
}

export const setActiveQuery = query => {
    return {
        type: 'query/setActiveQuery',
        payload: query
    }
}

export const setQueryResults = results => {
    return {
        type: 'query/setQueryResults',
        payload: results
    }
}

export const setQueryStatus = status => {
    return {
        type: 'query/setQueryStatus',
        payload: status
    }
}

export const setActiveQueryAndFetch = query => {
    return function(dispatch) {
        dispatch(setActiveQuery(query));
        dispatch(fetchQuery());
    }
}

export const fetchQuery = () => {
    return function(dispatch) {
        const sql = store.getState().activeQuery
        dispatch(setQueryStatus('Query in progress...'));
        return apiPost('/query', {sql: sql}).then((result) => {
            if (result.success) {
                dispatch(setQueryResults(result.rows));
                dispatch(setQueryStatus(result.rows.length + ' rows returned.'));
            } else {
                dispatch(setQueryResults(null));
                dispatch(setQueryStatus(result.errorMessage));
            }
        })
    }
}