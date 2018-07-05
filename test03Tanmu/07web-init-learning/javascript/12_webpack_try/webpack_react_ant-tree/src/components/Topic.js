import React, { Component } from 'react'

class Topic extends Component{

    constructor(props) {
        super(props);
        this.state = {
            msg: 'Topic'
        }
    }


    render() {

        const { msg } = this.state
        return(
            <div>
                <div className="msg">
                    <h3>{ msg }</h3>
                </div>
            </div>
        )

    }

}

export default Topic