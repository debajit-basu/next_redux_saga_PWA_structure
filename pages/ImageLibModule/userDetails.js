import React,{ Component } from 'react';
import Page from '../../components/page';
import Header from './Header';
import { connect } from 'react-redux';
import {Router} from '../../routes';


class userDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            userdata: []
        }
    }

    backToList(){
        Router.pushRoute('detailView');
    }

    componentDidMount() {
        console.log('did mount');
        this.getUserDetails();
    }

    getUserDetails() {
        fetch('http://www.mocky.io/v2/5d5bbae53200005a00628a7e').then((response) => response.json())
        .then(res => {
            // console.log(res)
            this.setState({userdata: res})

        })
        .catch((err) => {
            console.log('Inside catch block userfetch block' , err);
        })
    }

    render() {

        const { userdata } = this.state;
                
        return (
            <>
                <Header />

                <div className="font-italic jumbotron" style={{textAlign: 'center'}}>
                    <h3>Inside Inner Page of Image List</h3><br/>
                    <p>All user associated with images</p><br/>
                    <button type="button" className="btn btn-outline-primary ml-5 float-right mt-3"
                            onClick={this.backToList.bind(this)}> Previous </button>
                </div>

                <div className="container mb-5">


                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">city</th>
                        <th scope="col">address</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        userdata.length > 0 && userdata.map((val,key) => (
                        <tr key={key}>
                        <th scope="row">{val.id}</th>
                        <td>{val.name}</td>
                        <td>{val.gender}</td>
                        <td>{val.gender}</td>
                        <td>{val.city}</td>
                        <td>{val.address}</td>
                        </tr>
                        ))
                    }
                    </tbody>
                </table>

                
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

export default Page(connect(mapStateToProps,null)(userDetails));