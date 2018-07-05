import  React, { Component } from 'react'

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: 'About'
        }
    }

    render() {
        const { msg } = this.state

        return (
            <div>
                <div className="about-con">
                    <h3>{ msg }</h3>
                </div>                
            </div>
        )

    }

}

export default About