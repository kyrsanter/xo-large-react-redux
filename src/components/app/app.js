import React from 'react';
import Form from "../form";
import {connect} from 'react-redux'
import {getPlayers} from "../../actions";
import RowContainer from "../row-container";
import Popup from "../popup/popup";
import store from '../../store';

class App extends React.Component {
    initPlayers = (values) => {
        debugger
        if (values.name_1 == undefined || values.name_2 == undefined || values.color_1 == undefined || values.color_2 == undefined || values.sign_1 == undefined || values.sign_2 == undefined) {
            alert('The form or some fields are ampty ');
            return;
        }
        this.props.onPlayersGetted(values);
    };
    render() {
        return (
            <React.Fragment>
                {
                    this.props.started ? <RowContainer /> : <Form onSubmit={this.initPlayers}/>
                }
                {
                    this.props.showPopup ? <Popup /> : null
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        started: state.reducer.start,
        showPopup: state.reducer.showPopup
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPlayersGetted: (playersDataObj) => {
            return dispatch(getPlayers(playersDataObj))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);