import rootReducer from './reducers/rootReducer';
import ImageLibModuleRootSaga from '../ImageLibModule/redux/sagas/index';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware()


const configureStore = () => {
    const store = createStore(
            rootReducer,
            compose(
                applyMiddleware(sagaMiddleware)
            ),

    );
    // then run the saga
    sagaMiddleware.run(ImageLibModuleRootSaga);

    /*store.dispatch({type: 'LOGIN'});
    store.dispatch({type: 'LOGIN'});
    store.dispatch({type: 'LOGIN'});*/
    return store;
}

export default configureStore;


                // window.__REDUX_DEVTOOLS_EXTENSION__ &&
                // window.__REDUX_DEVTOOLS_EXTENSION__(),