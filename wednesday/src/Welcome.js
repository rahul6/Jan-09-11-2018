import React, { Component } from 'react';
import PersonComponent from './PersonComponent'
import axios from 'axios'

class Welcome extends Component {
	constructor(props){
		super(props)
		this.state = {message:""}
	}
	componentDidMount(){
		let self = this
		axios.get("/message.txt")
			 .then(response => {
			 	self.setState({message: response.data})
			 })
	}
	render(){
		return (<div>
				<h2>{this.state.message}</h2>
				<PersonComponent/>
		</div>)
	}
}
export default Welcome