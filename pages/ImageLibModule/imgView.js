import React,{ Component } from 'react';
import Page from '../../components/page';
import Header from './Header';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import {Router} from '../../routes';

import Clock from './clock';
import userDetails from './userDetails';

class imgView extends Component {
    constructor(props){
        super(props);
        this.state = {
            queryParam: null
        }
    }
    componentDidMount () {
        this.setState({queryParam: parseInt(this.props.router.query.id)});
    }

    backToList(){
        this.setState({queryParam: null} , () => {
            Router.pushRoute('home');
        })
    }

    gotoUser(){
        Router.pushRoute('userView');
    }

    render() {
        console.log(this.props.image.images[this.state.queryParam]);
        return (
            <>
                <Header />

                <div className="font-italic jumbotron" style={{textAlign: 'center'}}>
                    <h3>Inner Page of Image List</h3><br/>
                    <p>See specific Image</p><br/>
                    <button type="button" className="btn btn-outline-primary ml-5 float-right mt-3"
                            onClick={this.gotoUser.bind(this)}>See user Details </button>
                </div>

                <div className="container mb-5">
                <div className="row">
                    <div className="col-sm-6">
                        <img className="m-5" src={this.props.image.images[this.state.queryParam]}  
                            alt="not-found"/><br/>
                            <button type="button" className="btn btn-outline-primary ml-5 float-right mt-3"
                            onClick={this.backToList.bind(this)}>Back To List</button>
                    </div>
                    <div className="col-sm-6">
                    <p> Detail view of image</p>
                    <Clock />
                    </div>
                </div>

                </div>
                
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        image: state.images
    }
}

export default Page(connect(mapStateToProps,null)(withRouter(imgView)));