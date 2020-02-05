import React from 'react';
import {connect} from 'react-redux';
import Row from "../row";
import {getRows} from "../../actions";
import SideBar from "../side-bar/side-bar";

class RowContainer extends React.Component {

    componentDidMount() {
        this.buildRows()
    }

    buildRows = () => {
        let rows = [];
        let reversedRows = [];
        let obj = {
            id: null,
            squaresCounter: null,
            squaresInRow: [],
        };
        let cloneObj;
        let {squares} = this.props;
        let squaresInTriangle = squares / 2;
        let rowsCounter = 0;
        for (let i = 2; i < squaresInTriangle; i = i + 2) {
            rowsCounter = rowsCounter + i;
            if (rowsCounter <= squaresInTriangle) {
                cloneObj = JSON.parse(JSON.stringify(obj));
                cloneObj.squaresCounter = i;
                cloneObj.id = i / 2;
                rows.push(cloneObj)
             }
            else {
                break;
            }
        }
        for (let i = rows.length - 1; i >= 0; i--) {
            reversedRows.push(rows[i])
        }
        let full = [...rows, ...reversedRows];
        for(let i = 0; i < full.length; i++) {
            full[i] = {...full[i], id:i};
            for(let j = 0; j < full[i].squaresCounter; j++) {
                let squareObj = {
                    id: null,
                    closed: false,
                    inner: null,
                    linesCounter: 0,
                    sides: {
                        left: null,
                        right: null,
                        top: null,
                        bottom: null,
                    }
                };
                squareObj = {...squareObj, id: `${i}_${j}`};
                if (j === 0) {
                    if (i < full.length / 2 - 1) {
                        delete squareObj.sides.left;
                        delete squareObj.sides.top;
                    }
                    else if (i == full.length / 2 - 1) {
                        delete squareObj.sides.left;
                        delete squareObj.sides.top;
                    }
                    else if (i > full.length / 2 - 1) {
                        delete squareObj.sides.left;
                        delete squareObj.sides.bottom;
                    }
                }
                else if (j === full[i].squaresCounter - 1) {
                    if (i < full.length / 2 - 1) {
                        delete squareObj.sides.right;
                        delete squareObj.sides.top;
                    }
                    else if (i == full.length / 2 - 1) {
                        delete squareObj.sides.right;
                        delete squareObj.sides.top;
                    }
                    else if (i > full.length / 2 - 1) {
                        delete squareObj.sides.right;
                        delete squareObj.sides.bottom;
                    }
                }
                full[i].squaresInRow = [...full[i].squaresInRow, squareObj]
            }
        }
        this.props.onGetRows(full);
    };

    render() {
        let {rows} = this.props;
        return (
            <section className="game-row">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {
                                rows.map( (row) => {
                                    return <Row key={row.id} id={row.id}/>
                                })
                            }
                        </div>
                        <div className="col-lg-4">
                            <SideBar />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        squares: state.reducer.squares,
        rows: state.reducer.rows,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGetRows: (rowsArr) => {
            return dispatch(getRows(rowsArr))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RowContainer)