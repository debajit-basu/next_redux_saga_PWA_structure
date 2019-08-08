import React ,{ Component } from 'react';

class Header extends Component {

            render() {
            // console.log(this.state);
            return (
                <>
                    <blockquote className="blockquote bg-info p-4">
                        <h3 className="mb-0 font-weight-lighter" style={{color: 'white', textAlign: 'center'}}> Image List </h3>

                    </blockquote>

                </>
            )
        }
    }

export default Header;
