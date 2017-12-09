import React, { Component } from 'react'
import { connect } from "react-redux";
import './index.less';
import MobileHeader from './view'


const mapStateToProps = (state) => {
    return {
        atNight: state.atNight,
        isFetching: state.isFetching,
        showSideBar: state.showSideBar,
        current_theme_content: state.current_theme_content
    }
}

const mapDispatchToProps = ( dispatch, ownProps ) => {
 
    return {
        changeCssMode: (atNight) => {
            dispatch({
                type: 'SET_CSSMODE',
                atNight: atNight
            })
        },
        toggleSideBar: (showSideBar) => {
            dispatch({
                type: 'TOGGLE_SIDEBAR',
                showSideBar: showSideBar
            })
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MobileHeader);

