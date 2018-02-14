import React, { Component } from 'react'
import gantt from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';

class Gantt extends Component{

	constructor(){
		super()
		this.state = {
			msg:'Gantt'
		}
	}

	componentDidMount(){
		console.log(gantt)
	}

	render(){
		return(

			<div>
				<h2>Gantt</h2>
			</div>

		)
	}

}

export default Gantt