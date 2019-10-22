import React from 'react';


function ToDo(props) {
	console.log(props);
	return (
		<div>
			 {<div>{props.state.map((item,index) => (
		    	<p key={index} onClick={() => props.toggleItem(props.id, props.completed)}>{item.item}</p>
		    ))}</div>}
		</div>
	)
		
}

export default ToDo;
