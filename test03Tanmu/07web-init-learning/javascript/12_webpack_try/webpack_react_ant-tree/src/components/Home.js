import React, { Component } from "react"

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: "Home"
        }
    };


    render() {
        const { msg } = this.state;
        return (
            <div>

                <div className="home-con">
                    <h3>{ msg }</h3>
                </div>

            </div>
        )

    }

}

export default Home