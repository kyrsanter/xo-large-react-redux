import React from 'react';
import './popup.css';
import store from '../../store'
import {
    firstPlayerPutSign,
    secondPlayerPutSign,
    getClickedSquare,
    hidePopup,
    makeFirstActive,
    makeSecondActive,
    updateRows
} from '../../actions'
import {connect} from 'react-redux';

class Popup extends React.Component {

    buildButtons = () => {
        let setObj = this.props.selectedSquare.sides;
        let btnsArr = [];
        for(let side in setObj) {
            let btn;
            switch (side) {
                case 'top':
                    btn = (
                        <button key={side} style={{
                            borderTop: setObj[side] ? `10px solid ${setObj[side]}` : `10px solid white`
                        }} className="popup-button"
                        onClick={()=> this.hadleClick(side)}>

                        </button>
                    );
                    btnsArr.push(btn);
                    break;
                case 'right':
                    btn = (
                        <button key={side} style={{
                            borderRight: setObj[side] ? `10px solid ${setObj[side]}` : `10px solid white`
                        }} className="popup-button"
                        onClick={()=> this.hadleClick(side)}>

                        </button>
                    );
                    btnsArr.push(btn);
                    break;
                case 'bottom':
                    btn = (
                        <button key={side} style={{
                            borderBottom: setObj[side] ? `10px solid ${setObj[side]}` : `10px solid white`
                        }} className="popup-button"
                        onClick={()=> this.hadleClick(side)}>

                        </button>
                    );
                    btnsArr.push(btn);
                    break;
                case 'left':
                    btn = (
                        <button key={side} style={{
                            borderLeft: setObj[side] ? `10px solid ${setObj[side]}` : `10px solid white`
                        }} className="popup-button"
                        onClick={()=> this.hadleClick(side)}>

                        </button>
                    );
                    btnsArr.push(btn);
                    break;
            }
        }
        return btnsArr;
    };

    lookingForNeighbour = (relat, side, color) => {
        let {onFirstPlayerPutSign, onSecondPlayerPutSign, firstPlayer, secondPlayer} = this.props;
        let firstActive = firstPlayer.active;
        let neededSq;
        let rows = this.props.rows;
        let regExp = /([0-9]*)_([0-9]*)/;
        let rowId = Number(relat.id.match(regExp)[1]);
        let sqId = Number(relat.id.match(regExp)[2]);
        let sidesCounter = 0;
        debugger;
        switch (side) {
            case 'top':
                if (rowId === 0) {
                    return;
                }
                else if (rowId < rows.length / 2 - 1) {
                    sqId = sqId - 1;
                }
                else if (rowId === rows.length / 2 - 1) {
                    sqId = sqId - 1;
                }
                else if (rowId === rows.length / 2) {
                    sqId = sqId;
                }
                else if (rowId >  rows.length / 2 - 1) {
                    sqId = sqId + 1;
                }

                rowId = rowId - 1;
                neededSq = rows[rowId].squaresInRow[sqId];
                for(let side in neededSq.sides) {
                    if (neededSq.sides[side]) {
                        sidesCounter = sidesCounter + 1;
                    }
                }
                if (sidesCounter === relat.linesCounter) {
                    if (firstActive) {
                        onFirstPlayerPutSign();
                    }
                    else {
                        onSecondPlayerPutSign();
                    }
                }
                return {
                    ...neededSq,
                    inner: sidesCounter - 1 === relat.linesCounter ? relat.inner : null,
                    linesCounter: neededSq.linesCounter + 1,
                    sides: {
                        ...neededSq.sides,
                        bottom: color,
                    }
                };
                break;
            case 'bottom':
                if (rowId === rows.length - 1) {
                    return;
                }
                else if (rowId < rows.length / 2 - 1) {
                    sqId = sqId + 1;
                }
                else if (rowId === rows.length / 2 - 1) {
                    sqId = sqId;
                }
                else if (rowId >  rows.length / 2 - 1) {
                    sqId = sqId - 1;
                }
                rowId = rowId + 1;
                neededSq = rows[rowId].squaresInRow[sqId];
                for(let side in neededSq.sides) {
                    if (neededSq.sides[side]) {
                        sidesCounter = sidesCounter + 1;
                    }
                }
                if (sidesCounter === relat.linesCounter) {
                    if (firstActive) {
                        onFirstPlayerPutSign();
                    }
                    else {
                        onSecondPlayerPutSign();
                    }
                }
                return {
                    ...neededSq,
                    inner: sidesCounter === relat.linesCounter ? relat.inner : null,
                    linesCounter: neededSq.linesCounter + 1,
                    sides: {
                        ...neededSq.sides,
                        top: color,
                    }
                };

                break;
            case 'left':
                if (sqId === 0) {
                    return;
                }
                sqId = sqId - 1;
                neededSq = rows[rowId].squaresInRow[sqId];
                for(let side in neededSq.sides) {
                    if (neededSq.sides[side]) {
                        sidesCounter = sidesCounter + 1;
                    }
                }
                if (sidesCounter === relat.linesCounter) {
                    if (firstActive) {
                        onFirstPlayerPutSign();
                    }
                    else {
                        onSecondPlayerPutSign();
                    }
                }
                return {
                    ...neededSq,
                    inner: sidesCounter === relat.linesCounter ? relat.inner : null,
                    linesCounter: neededSq.linesCounter + 1,
                    sides: {
                        ...neededSq.sides,
                        right: color,
                    }
                };

                break;
            case 'right':
                if (sqId == rows[rowId].squaresInRow.length - 1) {
                    return;
                }
                sqId = sqId + 1;
                neededSq = rows[rowId].squaresInRow[sqId];
                for(let side in neededSq.sides) {
                    if (neededSq.sides[side]) {
                        sidesCounter = sidesCounter + 1;
                    }
                }
                if (sidesCounter === relat.linesCounter) {
                    if (firstActive) {
                        onFirstPlayerPutSign();
                    }
                    else {
                        onSecondPlayerPutSign();
                    }
                }
                return {
                    ...neededSq,
                    inner: sidesCounter === relat.linesCounter ? relat.inner : null,
                    linesCounter: neededSq.linesCounter + 1,
                    sides: {
                        ...neededSq.sides,
                        left: color,
                    }
                };
                break;
        }
    };

    hadleClick = (side) => {
        let {firstPlayer,
            secondPlayer,
            onFirstPlayerPutSign,
            onSecondPlayerPutSign,
            selectedSquare,
            ongUpdateClickedSquare,
            onMakeFirstActive,
            onMakeSecondActive,
            onHidePopup} = this.props;
        let currentColor = firstPlayer.active ? firstPlayer.color : secondPlayer.color;
        let сurrentSign = firstPlayer.active ? firstPlayer.sign : secondPlayer.sign;
        let firstActive = firstPlayer.active;
        let neighbour;
        let sidesCounter = 0;
        let selSq = {
            ...selectedSquare,
            sides: {
                ...selectedSquare.sides,
            }
        };
        debugger;
        switch (side) {
            case 'top':
                if (selectedSquare.sides[side]) {
                    alert('this side has been already choose');
                    onHidePopup();
                    return;
                }
                selSq = {
                    ...selectedSquare,
                    linesCounter: selectedSquare.linesCounter + 1,
                    sides: {
                        ...selectedSquare.sides,
                        top: currentColor,
                    }
                };
                for(let side in selSq.sides) {
                    sidesCounter = sidesCounter + 1;
                }
                if (sidesCounter === selSq.linesCounter) {
                    selSq.closed = true;
                    selSq.inner = сurrentSign;
                    if (firstActive) {
                        onFirstPlayerPutSign();
                        onMakeFirstActive()
                    }
                    else {
                        onSecondPlayerPutSign()
                        onMakeSecondActive()
                    }
                }
                break;
            case 'right':
                if (selectedSquare.sides[side]) {
                    alert('this side has been already choose');
                    onHidePopup();
                    return;
                }
                selSq = {
                    ...selectedSquare,
                    linesCounter: selectedSquare.linesCounter + 1,
                    sides: {
                        ...selectedSquare.sides,
                        right: currentColor,
                    }
                };
                for(let side in selSq.sides) {
                    sidesCounter = sidesCounter + 1;
                }
                if (sidesCounter === selSq.linesCounter) {
                    selSq.closed = true;
                    selSq.inner = сurrentSign;
                    if (firstActive) {
                        onFirstPlayerPutSign();
                        onMakeFirstActive()
                    }
                    else {
                        onSecondPlayerPutSign();
                        onMakeSecondActive()
                    }
                }
                break;
            case 'bottom':
                if (selectedSquare.sides[side]) {
                    alert('this side has been already choose');
                    onHidePopup();
                    return;
                }
                selSq = {
                    ...selectedSquare,
                    linesCounter: selectedSquare.linesCounter + 1,
                    sides: {
                        ...selectedSquare.sides,
                        bottom: currentColor,
                    }
                };
                for(let side in selSq.sides) {
                    sidesCounter = sidesCounter + 1;
                }
                if (sidesCounter === selSq.linesCounter) {
                    selSq.closed = true;
                    selSq.inner = сurrentSign;
                    if (firstActive) {
                        onFirstPlayerPutSign();
                        onMakeFirstActive();
                    }
                    else {
                        onSecondPlayerPutSign();
                        onMakeSecondActive();
                    }
                }
                break;
            case 'left':
                if (selectedSquare.sides[side]) {
                    alert('this side has been already choose');
                    onHidePopup();
                    return;
                }
                selSq = {
                    ...selectedSquare,
                    linesCounter: selectedSquare.linesCounter + 1,
                    sides: {
                        ...selectedSquare.sides,
                        left: currentColor,
                    }
                };
                for(let side in selSq.sides) {
                    sidesCounter = sidesCounter + 1;
                }
                if (sidesCounter === selSq.linesCounter) {
                    selSq.closed = true;
                    selSq.inner = сurrentSign;
                    if (firstActive) {
                        onFirstPlayerPutSign();
                        onMakeFirstActive()
                    }
                    else {
                        onSecondPlayerPutSign();
                        onMakeSecondActive()
                    }
                }
                break;
            default:
                return;
        }
        neighbour = this.lookingForNeighbour(selSq, side, currentColor);
        if (!selSq.closed) {
            if (firstActive) {
                onMakeSecondActive();
            }
            else {
                onMakeFirstActive();
            }
        }
        ongUpdateClickedSquare(selSq);
        this.buildNewRows(neighbour, selSq);
        onHidePopup();
    };

    buildNewRows = (neighbour, selSq) => {
        let {rows, onUpdateRows} = this.props;
        let newRows = JSON.parse(JSON.stringify(rows));
        let regExp = /([0-9]*)_([0-9]*)/;
        let rowId = Number(selSq.id.match(regExp)[1]);
        let sqId = Number(selSq.id.match(regExp)[2]);
        let rowIdN = Number(neighbour.id.match(regExp)[1]);
        let sqIdN = Number(neighbour.id.match(regExp)[2]);
        newRows[rowId].squaresInRow[sqId] = selSq;
        newRows[rowIdN].squaresInRow[sqIdN] = neighbour;
        onUpdateRows(newRows);
    };

    render() {
        let buttons = this.buildButtons();
        return (
            <section className="popup">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex justify-content-center align-items-center w100 h100">
                            <div className="buttons-wrapper">
                                {
                                    [...buttons]
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        rows: state.reducer.rows,
        selectedSquare: state.reducer.selectedSquare,
        firstPlayer: state.reducer.players.first,
        secondPlayer: state.reducer.players.second,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ongUpdateClickedSquare: (sq) => {
            return dispatch(getClickedSquare(sq))
        },
        onMakeFirstActive: () => {
            return dispatch(makeFirstActive())
        },
        onMakeSecondActive: () => {
            return dispatch(makeSecondActive())
        },
        onHidePopup: () => {
            return dispatch(hidePopup())
        },
        onUpdateRows: (arr) => {
            return dispatch(updateRows(arr))
        },
        onFirstPlayerPutSign: () => {
            return dispatch(firstPlayerPutSign())
        },
        onSecondPlayerPutSign: () => {
            return dispatch(secondPlayerPutSign())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);