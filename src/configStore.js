import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from './reducers';
import { 
    reducer as rootReducer,
    initialState
} from "./reducers";
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';



const win = window;
const sagaMiddleware = createSagaMiddleware();
const middlewares = [];


let storeEnhancers;

if (process.env.NODE_ENV === 'production') {
    storeEnhancers = compose(
        applyMiddleware( ...middlewares, sagaMiddleware )
    )
} else {
    storeEnhancers = compose(
        applyMiddleware( ...middlewares, sagaMiddleware ),
        ( win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f
    )
};


export default function configureStore( initialState=initialState ){
    const store = createStore( rootReducer, initialState, storeEnhancers );
    sagaMiddleware.run( rootSaga );
    
    if( module.hot && process.env.NODE_ENV==='production'){
        module.hot.accpet( './reducers', ()=>{
            const nextRootReducer = require('./reducers');
            store.replaceReducer(nextRootReducer);
        })
    }
    return store
}