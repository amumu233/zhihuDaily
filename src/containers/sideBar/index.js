import { connect } from "react-redux";
import sideBar from './view';
import { actionTypes } from "../../reducers";
import './index.less'

const mapStateToProps = (state) => ({
    theme_list: state.theme_list,
    atNight: state.atNight,
    showSideBar: state.showSideBar
})

const mapDispatchToProps = (dispatch,ownProps) => ({
    getThemeContent : function(){
        dispatch({
            type: actionTypes.GET_THEME_CONTENT,
            themeId: ownProps.themeId
        })
    },
    getThemeList: function(){
        dispatch({
            type: actionTypes.GET_THEME_LIST
        })
    },
    toggleSideBar: function(showSideBar){
        dispatch({
            type: actionTypes.TOGGLE_SIDEBAR,
            showSideBar
        })
    }
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(sideBar)