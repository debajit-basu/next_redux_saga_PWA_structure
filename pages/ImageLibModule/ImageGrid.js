import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { loadImages } from "./redux/actions/index";
import Page from '../../components/page';

class ImageGrid extends Component{
    constructor(props) {
        super(props);
        this.state = {
            url: [],
            numItemsToGenerate: 20,
            numImagesAvailable: 242,
            imageWidth: 480,
            imageHeight: 480,
            collectionID: 1163637
        }
    }

    componentDidMount() {

        /*for (let i = 0; i < this.state.numItemsToGenerate; i++) {
            let randomImageIndex = Math.floor(Math.random() * this.state.numImagesAvailable);
            this.galleryImg(randomImageIndex);
        }*/
    }


    /*galleryImg(randNum){

        const state = this.state;
        fetch(`https://source.unsplash.com/collection/${state.collectionID}/${state.imageWidth}x${state.imageHeight}/?sig=${randNum}`)
            .then((response) => {

                // console.log(response.url);
                state.url.push(response.url)
                this.setState(state);

            })
    }*/
    render() {
        // console.log("ImageGrid inside render");
        // console.log(this.props);
        console.log(this.props.loading);

        return(
            <>
                <div className="font-italic jumbotron" style={{textAlign: 'center'}}>
                    <h2>Click below button to see Random Images</h2>
                </div>
                {
                    this.props.image.images.length > 0 && this.props.image.images.map((val,i) => (
                        <img key={i} className="m-1" src={val}  alt="not-found"/>

                    ))
                }
                <div className="mt-3" style={{textAlign: 'center'}}>
                {
                    (this.props.loading)?
                    
                        <span><button className="btn btn-info" onClick={this.props.loadImages}>Loading.......</button></span>
                        :
                        <span><button className="btn btn-info" onClick={this.props.loadImages}>Load More Images</button></span>
                                           
                }
                </div>


            </>
        )
    }
}

const mapStateToProps = (state) => {
    /*console.log("ImageGrid inside mapStateToProps");
    console.log(state);*/

    return {
            loading: state.isLoading,
            error: state.error,
            image: state.images
        }
}

const mapDispatchToProps = (dispatch) => {
        return {
            loadImages: () => { dispatch(loadImages()) }
        }
}

export default Page(connect(mapStateToProps,mapDispatchToProps)(ImageGrid));
