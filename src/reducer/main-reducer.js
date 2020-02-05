let initialState = {
    squares: 264,
    showPopup: false,
    start: false,
    selectedSquare: null,
    neighbour: null,
    players: {
        first: {
            id: 1,
            active: false,
            sign: null,
            color: null,
            name: null,
            scores: 0,
        },
        second: {
            id: 2,
            active: false,
            sign: null,
            color: null,
            name: null,
            scores: 0,
        }
    },
    rows: [
        //id num
        // squaresCounter num
        // squaresInRow [{
            // id,
        // }]
    ]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_PLAYERS':
            let {payload} = action;
            return {
                ...state,
                start: true,
                players: {
                    first: {
                        ...state.players.first,
                        active: true,
                        sign: payload.sign_1,
                        name: payload.name_1,
                        color: payload.color_1,
                    },
                    second: {
                        ...state.players.second,
                        sign: payload.sign_2,
                        name: payload.name_2,
                        color: payload.color_2,
                    }
                }
            };
            break;
        case 'GET_ROWS':
            return {
                ...state,
                rows: [...action.payload]
            };
            break;
        case 'GET_CLICKED_SQUARE':
            return {
                ...state,
                selectedSquare: action.payload,
            };
            break;
        case 'MAKE_FIRST_ACTIVE':
            return {
                ...state,
                players: {
                    first: {
                        ...state.players.first,
                        active: true
                    },
                    second: {
                        ...state.players.second,
                        active: false
                    }
                }
            };
            break;
        case 'MAKE_SECOND_ACTIVE':
            return {
                ...state,
                players: {
                    first: {
                        ...state.players.first,
                        active: false
                    },
                    second: {
                        ...state.players.second,
                        active: true
                    }
                }
            };
            break;
        case 'HIDE_POPUP':
            return {
                ...state,
                showPopup: false,
            };
            break;
        case 'SHOW_POPUP':
            return {
                ...state,
                showPopup: true,
            };
            break;
        case 'UPDATE_ROWS':
            return {
                ...state,
                rows: action.payload
            };
        case 'FIRST_PLAYER_PUT_SIGN':
            return {
                ...state,
                players: {
                    ...state.players,
                    first: {
                        ...state.players.first,
                        scores: state.players.first.scores + 1,
                    }
                }
            };
        case 'SECOND_PLAYER_PUT_SIGN':
            return {
                ...state,
                players: {
                    ...state.players,
                    second: {
                        ...state.players.second,
                        scores: state.players.second.scores + 1,
                    }
                }
            };
        default:
            return state;
    }
};

export default reducer;