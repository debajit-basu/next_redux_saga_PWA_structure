import { combineReducers } from "redux";

// import './listReducers';


//List of Reducers for Different Module...



//ImageLibModule Reducers//
import loadingReducer from '../../ImageLibModule/redux/reducers/loadingReducer';
import imagesReducer from '../../ImageLibModule/redux/reducers/imagesReducer';
import errorReducer from '../../ImageLibModule/redux/reducers/errorReducer';
//--------------------------------------------------------------------------//


// Register Reducers for store

const rootReducer = combineReducers({
    

    //ImageLibModule Reducers//
    
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorReducer

});

export default rootReducer;
