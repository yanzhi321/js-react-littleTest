import React from 'react'

import { Calendar } from 'antd';

import 'antd/dist/antd.css';


function onPanelChange(value, mode) {
    console.log(value, mode);
}


class CalendarCom extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            msg: 'calendar'
        }
    }

    componentDidMount() {
        //http://1x.ant.design/components/calendar/
        //domAction
        //初始化使得DOM节点应该进行到这里。若你需要从远端加载数据，这是一个适合实现网络请求的地方。在该方法里设置状态将会触发重渲。
    }

    componentWillUnmount() {
        //remove dome
        //在组件被卸载和销毁之前立刻调用。可以在该方法里处理任何必要的清理工作，例如解绑定时器，取消网络请求，清理任何在componentDidMount环节创建的DOM元素。
    }

    componentWillReceiveProps(nextProps) {
        // 在装配了的组件接收到新属性前调用。若你需要更新状态响应属性改变（例如，重置它），你可能需对比this.props和nextProps并在该方法中使用this.setState()处理状态改变。
    }

    shouldComponentUpdate(nextProps, nextState) {
        //让React知道当前状态或属性的改变是否不影响组件的输出。默认行为是在每一次状态的改变重渲，在大部分情况下你应该依赖于默认行为。
    }

    render() {

        const { msg } = this.state

        return (
            <div id="container">
                <h2>{ msg }</h2>
                <div style={{ width: 290, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                </div>
            </div>
           
        )

    }


}


export default CalendarCom