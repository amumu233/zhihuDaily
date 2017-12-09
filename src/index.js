import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import configureStore from './configStore';

import 'antd/dist/antd.css';
import IndexApp from './pages';





const store = configureStore();
// store.dispatch({ type: actionTypes.GET_THEME_LIST });
// store.dispatch({ type: actionTypes.GET_NEWS_LAST});

ReactDOM.render(
    <Provider store={store}>
        <IndexApp></IndexApp>    
    </Provider>,
    
    document.getElementById('root')
);