import { take, put, call, fork } from "redux-saga/effects";
import { get, post } from "../fetch/fetch";
import { actionTypes } from "../reducers";


const baseURL = 'http://localhost:18080'; // 开发使用的服务器地址
// const baseURL = '';

export function* getThemeList() {
    yield put({ type: actionTypes.FETCH_START });
    try {
        return yield call(get, baseURL + '/proxyapi?url=https://news-at.zhihu.com/api/4/themes')
    } catch (error) {
        yield put({
            type: actionTypes.SET_MESSAGE,
            msgType: 0,
            msgContent: '网络请求错误'
        })
    } finally {
        yield put({ type: actionTypes.FETCH_END })
    }
}

export function* getThemeListFlow() {
    while (true) {
        let req = yield take(actionTypes.GET_THEME_LIST);
        let res = yield call(getThemeList);
        if (res) {
            if (!res.msgTip) {
                yield put({
                    type: actionTypes.RESPONSE_THEME_LIST,
                    data: res
                })
            } else {
                yield put({
                    type: actionTypes.SET_MESSAGE,
                    msgType: 0,
                    msgContent: res.msgTip + "    " + res.msgContent
                })
            }
        }
    }
}

export function* getThemeContent(themeId) {
    yield put({ type: actionTypes.FETCH_START });
    try {
        return yield call(get,baseURL+`/proxyapi?url=https://news-at.zhihu.com/api/4/theme/${themeId}`);
    } catch (error){
        yield put({
            type: actionTypes.SET_MESSAGE,
            msgType: 0,
            msgContent: '网络请求错误'
        })
    } finally {
        yield put({ type: actionTypes.FETCH_END})
    }
}

export function* getThemeContentFlow(){
    while(true){
        let req = yield take( actionTypes.GET_THEME_CONTENT);
        let res = yield call( getThemeContent, req.themeId);
        if (res) {
            if (!res.msgTip) {
                yield put({
                    type: actionTypes.RESPONSE_THEME_CONTENT,
                    data: res
                })
            } else {
                yield put({
                    type: actionTypes.SET_MESSAGE,
                    msgType: 0,
                    msgContent: res.msgTip + "    " + res.msgContent
                })
            }
        }
    }
}

export function* getNewsLast() {
    yield put({ type: actionTypes.FETCH_START });
    try {
        return yield call(get,baseURL+`/proxyapi?url=https://news-at.zhihu.com/api/4/news/latest`);
    } catch (error){
        yield put({
            type: actionTypes.SET_MESSAGE,
            msgType: 0,
            msgContent: '网络请求错误'
        })
    } finally {
        yield put({ type: actionTypes.FETCH_END})
    }
}

export function* getNewsLastFlow(){
    while(true){
        let req = yield take( actionTypes.GET_NEWS_LAST);
        let res = yield call( getNewsLast);
        if (res) {
            if (!res.msgTip) {
                yield put({
                    type: actionTypes.RESPONSE_NEWS_LAST,
                    data: res
                })
            } else {
                yield put({
                    type: actionTypes.SET_MESSAGE,
                    msgType: 0,
                    msgContent: res.msgTip + "    " + res.msgContent
                })
            }
        }
    }
}

export function* getArticle(articleId){
    yield put({type: actionTypes.FETCH_START});
    try {
        return yield call(get,baseURL+`/proxyapi?url=https://news-at.zhihu.com/api/4/news/${articleId}`);
    } catch (error) {
        yield put({
            type: actionTypes.SET_MESSAGE,
            msgContent: '网络请求错误',
            msgType: 0
        })
    } finally {
        yield put({
            type: actionTypes.FETCH_END
        })
    }
}

export function* getArticleFlow(){
    while(true){
        let req = yield take( actionTypes.GET_ARTICLE );
        let res = yield call( getArticle, req.articleId );
        if (res) {
            if (!res.msgTip) {
                yield put({
                    type: actionTypes.RESPONSE_ARTICLE,
                    data: res
                })
            } else {
                yield put({
                    type: actionTypes.SET_MESSAGE,
                    msgType: 0,
                    msgContent: res.msgTip + "    " + res.msgContent
                })
            }
        }
    }
}


export default function* rootSaga(){
    yield fork(getThemeListFlow);
    yield fork(getThemeContentFlow);
    yield fork(getNewsLastFlow);
    yield fork(getArticleFlow);
}