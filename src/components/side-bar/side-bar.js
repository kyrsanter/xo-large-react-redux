import React from 'react';
import {connect} from 'react-redux';
import './side-bar.css';

class SideBar extends React.Component {

    render() {
        let {firstPlayer, secondPlayer} = this.props;
        return (
            <aside>
                <p style={{
                    color: firstPlayer.active ? firstPlayer.color : secondPlayer.color,
                }}>Current player: {firstPlayer.active ? firstPlayer.name : secondPlayer.name}</p>
                <div className="scores">
                    <p>{firstPlayer.name} : {firstPlayer.scores}</p>
                    <p>{secondPlayer.name} : {secondPlayer.scores}</p>
                </div>
            </aside>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        firstPlayer: state.reducer.players.first,
        secondPlayer: state.reducer.players.second,
    }
};

export default connect(mapStateToProps, null)(SideBar);