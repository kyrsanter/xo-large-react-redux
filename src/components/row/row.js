import React from 'react';
import store from "../../store";
import {connect} from "react-redux";
import {getRows} from "../../actions";
import './row.css';
import Square from "../square";


class Row extends React.Component {
    render() {
        let {rows, id} = this.props;
        return (
            <div className="row justify-content-center">
                {
                    rows[id].squaresInRow.map( sq => {
                        return <Square key={sq.id} id={sq.id} sq={sq}/>
                    })
                }
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        rows: state.reducer.rows,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGetRows: (arr) => {
            return dispatch(getRows(arr))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Row);