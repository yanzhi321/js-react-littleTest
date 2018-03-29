import React from 'react'

class News extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            msg: 'News'
        }
    }

    componentDidMount() {
        //dom action
    }

    componentWillUnmount() {
        // remove dom
    }

    componentWillUpdate(nextProps, nextState) {
        //props和state发生变化时执行，并且在render方法之前执行，
    }

    render() {
        const { msg } = this.state
        return(
            <div>
                <h2>{msg}</h2>
            </div>
        )
    }

}

export default News