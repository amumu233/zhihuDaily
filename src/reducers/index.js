
import { combineReducers } from "redux";

const initialState = {
    theme_list: {
        others: []
    },
    news_last: {
        date: '',
        stories: [],
        top_stories: []
    },
    current_theme_content: {
        stories: [],
        description: '',
        background: '',
        editors: [
            {
                name: '',
                avatar: ''
            }
        ]
    },
    msg: {
        type: 1,
        content: ''
    },
    isFetching: true,
    article: {
        body:''
    },
    atNight: true,
    showSideBar: false
};

export const actionTypes = {
    FETCH_START: 'FETCH_START',
    FETCH_END: 'FETCH_END',
    SET_MESSAGE: 'SET_MESSAGE',
    GET_THEME_LIST: 'GET_THEME_LIST',
    RESPONSE_THEME_LIST: 'RESPONSE_THEME_LIST',
    GET_THEME_CONTENT: 'GET_THEME_CONTENT',
    RESPONSE_THEME_CONTENT: 'RESPONSE_THEME_CONTENT',
    GET_NEWS_LAST: 'GET_NEWS_LAST',
    RESPONSE_NEWS_LAST: 'RESPONSE_NEWS_LASE',
    SET_CSSMODE: 'SET_CSSMODE',
    TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR',
    GET_ARTICLE: 'GET_ARTICLE',
    RESPONSE_ARTICLE: 'RESPONSE_ARTICLE'
}

export const actions = {
    clear_msg : function(){
        return {
            type: actionTypes.SET_MESSAGE,
            msgType: 1,
            msgContent: ''
        }
    },
    get_theme_list: function(){
        return {
            type: actionTypes.GET_THEME_LIST
        }
    },
    get_theme_content: function(themeId){
        return {
            type: actionTypes.GET_THEME_CONTENT,
            themeId
        }
    },
    get_news_last: function(){
        return {
            type: actionTypes.GET_NEWS_LAST
        }
    },
    get_article: function(articleId){
        return {
            type: actionTypes.GET_ARTICLE,
            articleId
        }
    }
}

export function reducer(state=initialState, action){
    switch(action.type){
        case actionTypes.FETCH_START:
            return {
                ...state,
                isFetching: true
            };
        case actionTypes.FETCH_END:
            return {
                ...state,
                isFetching: false
            };
        case actionTypes.SET_MESSAGE:
            return {
                ...state,
                msg: {
                    type: action.msgType,
                    content: action.msgContent
                }
            };
        case actionTypes.RESPONSE_THEME_LIST: 
            return {
                ...state,
                theme_list: action.data
            };
        case actionTypes.RESPONSE_THEME_CONTENT:
            return {
                ...state,
                current_theme_content: action.data
            };
        case actionTypes.RESPONSE_NEWS_LAST: 
            return {
                ...state,
                news_last: action.data
            };
        case actionTypes.SET_CSSMODE:
            return {
                ...state,
                atNight: !action.atNight
            };
        case actionTypes.TOGGLE_SIDEBAR:
            return {
                ...state,
                showSideBar: !action.showSideBar
            };
        case actionTypes.RESPONSE_ARTICLE:
            return {
                ...state,
                article: action.data
            };
        default:    
            return state;
    }
}

export default combineReducers({
    global: reducer
})

