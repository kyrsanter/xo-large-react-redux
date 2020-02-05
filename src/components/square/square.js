import React from 'react';
import './square.css';
import {connect} from 'react-redux';
import {getClickedSquare, showPopup} from '../../actions'
import store from '../../store'

class Square extends React.Component {

    squareHandle = (id) => {
        let regexp = /([0-9]*)_([0-9]*)/;
        let rows = JSON.parse(JSON.stringify(this.props.rows));
        let rowId = id.match(regexp)[1];
        let neededRow = rows.filter( ({id}) => id == rowId);
        let neededSquare = neededRow[0].squaresInRow.filter( sq => sq.id == id );
        this.props.onGetClickedSquare(neededSquare[0]);
        this.props.onShowPopup();
    };


    render() {
        let {id, sq} = this.props;
        return (
            <div className="square"
                onClick={() => this.squareHandle(id)}
                style={
                    {
                        borderTop: sq.sides['top'] ? `1px solid ${sq.sides['top']}` : `1px solid #33333350`,
                        borderBottom: sq.sides['bottom'] ? `1px solid ${sq.sides['bottom']}` : `1px solid #33333350`,
                        borderLeft: sq.sides['left'] ? `1px solid ${sq.sides['left']}` : `1px solid #33333350`,
                        borderRight: sq.sides['right'] ? `1px solid ${sq.sides['right']}` : `1px solid #33333350`
                    }
                }
            >
                {sq.inner}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        rows: state.reducer.rows,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGetClickedSquare: (square) => {
            return dispatch(getClickedSquare(square))
        },
        onShowPopup: () => {
            return dispatch(showPopup())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Square);