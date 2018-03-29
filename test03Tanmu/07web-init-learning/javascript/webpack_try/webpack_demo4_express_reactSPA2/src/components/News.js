import React from 'react'

class News extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            msg: "News"
        }
    }

    componentDidMount() {

    }

    render() {
        const { msg } = this.state        
        return(
            <div>
                <h2>{ msg }</h2>
            </div>
        )
    }

}

export default News