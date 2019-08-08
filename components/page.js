import React,{ Component } from 'react';

import { Provider } from 'react-redux';
import configureStore from '../pages/store/index';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();


const page = (Page) => {
    return(
        class PageWrapper extends Component{
            render(){
                return(
                <Provider store={store}>

                    <Page />

                </Provider>
                )
            }
        }
    )
}
export default page;
