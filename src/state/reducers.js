const initialState = {
    connection: false,
    tables: []
}
const rootReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'connection/set':
            return {...state, connection: action.payload.connection};
        case 'tables/set':
            return {...state, tables: action.payload.tables};
        default:
            return state
    }
}

export default rootReducer;