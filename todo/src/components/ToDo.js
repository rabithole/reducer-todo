import React from 'react';
// import { useState } from 'react';

function ToDo(props) {
	console.log(props.state.completed);

	// const [completed, setCompleted] = useState('completed', false);

	// const toggleCompleted = (clickId) => {
	// 	props.state.map(item => {
	// 		// console.log(item.id);
	// 		// console.log(clickId);
	// 		if(clickId === item.id) {
	// 			setCompleted(!completed);
	// 			console.log(item.id, clickId)
				
	// 		} 
	// 		// else {
	// 		// 	setCompleted(completed);
	// 		// }
	// 	})
		
	// }

	return (
		<div>{props.state.map(item => (
		    	<p 
		    		key={item.id} 
		    		className={item.completed ? 'completed' : 'notCompleted'}
		    		onClick={() => props.toggleCompleted(item.id)}
		    	>
		    		{item.todo}
		    	</p>
		    ))}
		</div>
	)
		
}

export default ToDo;

 // {<div>{props.state.map((item,index) => (
	// 	    	<p 
	// 	    		key={index} 
	// 	    		className={completed ? 'completed' : 'notCompleted'}
	// 	    		onClick={toggleCompleted}
		    		
	// 	    	>{item.item}</p>
	// 	    ))}</div>}
