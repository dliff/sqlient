const initialState = {
    connection: false,
    connectionStatus: '',
    tables: [],
    activeTable: null,
    activeTableSchema: [],
    activeQuery: null,
    queryResults: null,
    queryStatus: ''
}
const rootReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'connection/set':
            return {...state, connection: action.payload.connection};
        case 'connection/setConnectionStatus':
            return {...state, connectionStatus: action.payload};
        case 'tables/set':
            return {...state, tables: action.payload.tables};
        case 'tables/setActiveTable':
            return {...state, activeTable: action.payload};
        case 'tables/setActiveTableSchema':
            return {...state, activeTableSchema: action.payload};
        case 'query/setActiveQuery':
            return {...state, activeQuery: action.payload};
        case 'query/setQueryResults':
            return {...state, queryResults: action.payload};
        case 'query/setQueryStatus':
            return {...state, queryStatus: action.payload};
        default:
            return state
    }
}

export default rootReducer;