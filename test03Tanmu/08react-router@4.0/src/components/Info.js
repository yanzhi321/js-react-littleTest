import React, { Component } from 'react'

import { Calendar } from 'antd';
//import 'antd/dist/antd.css';
import './static/css/info.css'

//react-big-calendar
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

import BigCalendar from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/css/react-big-calendar.css'

import 'react-big-calendar/lib/addons/dragAndDrop/styles.less';
import 'react-big-calendar/lib/less/month.less'
//events
//import events from './static/js/events'


//moment
import moment from 'moment'
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
//events.js

const DragAndDropCalendar = withDragAndDrop(BigCalendar);

function onPanelChange(value, mode) {
  console.log(value, mode);
}

//let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

let dateEvents = [
    {
    'title': 'All Day Event very long title',
    'start': new Date(2017, 8, 1),
    'end': new Date(2017, 9, 1)
  },
  {
    'title': 'Long Event',
    'start': new Date(2017, 11, 7),
    'end': new Date(2015, 12, 10)
  }
]

class Info extends Component{

	constructor(props){
		super(props)
		this.state = {
			events: dateEvents
		}

		 this.moveEvent = this.moveEvent.bind(this)
	}

	//moveEvent
	moveEvent = ({event, start, end}) => {
		const { events } = this.state;

		//indexOf(event)查找到event的下标
		const idx = events.indexOf(event);
		const updatedEvent = { ...event, start, end };

		const nextEvents = [...events]
		//移除数组的第idx元素，并在数组第idx位置添加新元素updatedEvent
		nextEvents.splice(idx, 1, updatedEvent)

		this.setState({
			events: nextEvents
		})
		alert(`${event.title} was dropped onto ${event.start}`);

	}

	

	render(){
		const {msg} = this.state

		return(

			<div>
				<h2>react-router@4.0{msg}</h2>
				<div className="calBox" style={{width: 290, padding: 20}}>
					<div style={{ width: 290,  border: '1px solid #d9d9d9', borderRadius: 4 }}>
					    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
					</div>
				</div>

				<div className="bigBox" style={{width:'100%'}}>
					{/*<DragAndDropCalendar
										   
				        events={this.state.events}
				        onEventDrop={this.moveEvent}
				        views={allViews}
				        defaultDate={new Date(2015, 3, 12)}

				        onSelectEvent={event => alert(event.title)}


			    	/>*/}

			    	<DragAndDropCalendar
				        selectable={true}
				        events={this.state.events}
				        onEventDrop={this.moveEvent}
				        defaultView='month'
				        defaultDate={new Date(2015, 3, 12)}
				        onSelectSlot={(slotInfo) => alert(
				            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
				            `\nend: ${slotInfo.end.toLocaleString()}` +
				            `\naction: ${slotInfo.action}`
				        )}
				    />

				</div>

			</div>

		)

	}

}

export default DragDropContext(HTML5Backend)(Info)