const getPlayers = (playersDataObj) => {
    return {
        type: 'GET_PLAYERS',
        payload: playersDataObj
    }
};

const getRows = (rowsArr) => {
    return {
        type: 'GET_ROWS',
        payload: rowsArr
    }
};

const getClickedSquare = (squareObj) => {
    return {
        type: 'GET_CLICKED_SQUARE',
        payload: squareObj,
    }
};

const makeFirstActive = () => {
    return {
        type: 'MAKE_FIRST_ACTIVE'
    }
};

const makeSecondActive = () => {
    return {
        type: 'MAKE_SECOND_ACTIVE'
    }
};


const hidePopup = () => {
    return {
        type: 'HIDE_POPUP'
    }
};

const showPopup = () => {
    return {
        type: 'SHOW_POPUP'
    }
};

const updateRows = (arr) => {
    return {
        type: 'UPDATE_ROWS',
        payload: arr,
    }
};

const firstPlayerPutSign = () => {
    return {
        type: 'FIRST_PLAYER_PUT_SIGN'
    }
}

const secondPlayerPutSign = () => {
    return {
        type: 'SECOND_PLAYER_PUT_SIGN'
    }
}

export {
    getPlayers,
    getRows,
    getClickedSquare,
    makeFirstActive,
    makeSecondActive,
    hidePopup,
    showPopup,
    updateRows,
    firstPlayerPutSign,
    secondPlayerPutSign
}